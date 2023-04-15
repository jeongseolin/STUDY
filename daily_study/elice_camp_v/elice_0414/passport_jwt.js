// app.js
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');
const session = require('express-session');
const passport = require('passport'); 
const MongoStore = require('connect-mongo');

const loginRequired = require('./middlewares/login-required');
// jwt 토큰을 확인하는 미들웨어 불러오기
const getUserFromJWT = require('./middlewares/get-user-from-jwt');

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

require('./passport')();

mongoose.connect('mongodb://localhost:27017/simple-board');

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 세션 비활성화 하기
// app.use(session({}));

app.use(passport.initialize());
// app.use(passport.session());
// jwt 로그인 미들웨어 추가
app.use(getUserFromJWT);

app.use('/', indexRouter);
app.use('/posts', loginRequired, postsRouter);
app.use('/users', loginRequired, usersRouter);
app.use('/api', loginRequired, apiRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;





// auth.js
const { Router } = require('express');
const passport = require('passport');
const { setUserToken } = require('../utils/jwt');

const router = Router();

// 세션 비활성화 session: false
router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
  // 유저 토큰 생성 및 쿠키에 전달하기
  setUserToken(res, req.user);
  
  res.redirect('/');
});

module.exports = router;





// jwt.js - utils
const jwt = require('jsonwebtoken');

const secret = 'elice';

exports.secret = secret;

exports.setUserToken = (res, user) => {
  // 유저 jwt 토큰생성
  const token = jwt.sign(user, secret);
  // 토큰을 쿠키로 전달
  res.cookie('token', token);
}





// jwt.js - strategies
const JwtStrategy = require('passport-jwt').Strategy;
const { secret } = require('../../utils/jwt');


const cookieExtractor = (req) => {
  // req 의 cookies 에서 token 사용하기
  const { token } = req.cookies;
  return token; // return req.cookies.token; 으로 간결하게도 표현 가능

};

const opts = {
  secretOrKey: secret, //./utils/jwt 의 secret 사용하기
  jwtFromRequest: cookieExtractor,
}

module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});





// index.js
const passport = require('passport');

const local = require('./strategies/local');
const jwt = require('./strategies/jwt');

module.exports = () => {
  passport.use(local);
  // jwt strategy 사용
  passport.use(jwt);
  
  // 세션 비활성화
  // passport.serializeUser((user, callback) => {
  //  callback(null, user);
  // });

  // passport.deserializeUser((obj, callback) => {
  //  callback(null, obj);
  // });
};