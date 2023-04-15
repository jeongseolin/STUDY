// strategies/google.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User, OAuth } = require('../../models');

const config = {
  clientID: '522949189604-nha5g7i0ou444jrfuh9u9j9u25kk9q9j.apps.googleusercontent.com', // clientId 설정하기
  clientSecret: 'GOCSPX-IXx6bTOaYu_HkfNAwh5N3zQgKez', // clientSecret 설정하기
  callbackURL: "/auth/google/callback"
};

async function findOrCreateUser({ name, email }) {
  const user = await User.findOne({
    email,
  });

  if (user) { 
    return user;
  }

  const created = await User.create({
    name,
    email,
    password: 'GOOGLE_OAUTH',
  });

  return created;
}

module.exports = new GoogleStrategy(config, async (accessToken, refreshToken, profile, done) => {
  const { email, name } = profile._json;

  try {
    const user = await findOrCreateUser({ email, name })
    done(null, {
      shortId: user.shortId,
      email: user.email,
      name: user.name,
    });
  } catch (e) {
    done(e, null);
  }
});





// routes/auth.js
const { Router } = require('express');
const passport = require('passport');
const { setUserToken } = require('../utils/jwt');

const router = Router();

router.post('/', passport.authenticate('local', { session: false }), (req, res, next) => {
  setUserToken(res, req.user);
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res, next) => {
  // userToken 설정하기
  setUserToken(res, req.user);
  res.redirect('/');
});

module.exports = router;






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

app.use(passport.initialize());
app.use(getUserFromJWT)

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
