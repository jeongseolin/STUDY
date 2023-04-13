// local.js
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const hashPassword = require('../../utils/hash-password');

const config = {
  usernameField: 'email', // 'email' 필드 사용하도록 설정
  passwordField: 'password', // 'password' 필드 사용하도록 설정
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('회원을 찾을 수 없습니다.');
    }
    // 검색 한 유저의 비밀번호와 요청된 비밀번호의 해쉬값이 일치하는지 확인
    if (user.password !== hashPassword(password)) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    done (null, {
      shortId: user.shortId,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    done(err, null);
  }
});

module.exports = local;





// index.js - passport
const passport = require('passport');
// local 불러오기
const local = require('./strategies/local');

module.exports = () => {
  // local strategy 사용
  passport.use(local); // 작성한 local strategy를 passport로 사용하겠다.

  passport.serializeUser((user, callback) => {
    callback(null, user);
  });

  passport.deserializeUser((obj, callback) => {
    callback(null, obj);
  });
};





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

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

// 만든 login-required.js를 불러오기
const loginRequired = require('./middlewares/login-required');

require('./passport')();

mongoose.connect('mongodb://localhost:27017/simple-board');

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = date => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'elice',
    resave: false,
    saveUninitialized: true,
  })
);
// passport를 초기화하고, 세션을 사용할 수 있게 설정을 추가합니다.
// passport initialize
app.use(passport.initialize());
// passport session
app.use(passport.session());

app.use('/', indexRouter);
// /posts 경로에 로그인 필수로 설정하기
app.use('/posts', loginRequired, postsRouter);
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

const router = Router();

// passport local 로 authenticate 하기
router.post('/', passport.authenticate('local'), (req, res, next) => {
  res.redirect('/');
});

module.exports = router;




// index.js - routes
const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const { User } = require('../models');

const router = Router();

router.get('/', (req, res) => {
  // 로그인 된 경우 /posts로 
  if (req.user) {
      res.redirect('/posts');
      return;
  }
  // 로그인 되지 않은 경우 /login 으로
  res.redirect('/login');
});

router.get('/login', (req, res, next) => {
  res.render('user/login');
});

router.get('/join', (req, res, next) => {
  res.render('user/join');
});

router.post('/join', asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = hashPassword(password);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });
  
  console.log('신규 회원', user);
  
  res.redirect('/');
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;




// login-required.js
module.exports = (req, res, next) => {
  // 로그인이 안되어있다면 메인화면으로
  if (!req.user) {
      res.redirect('/');
      return;
  }
  // 로그인이 되어있다면 다음 미들웨어로
  next();
  
}