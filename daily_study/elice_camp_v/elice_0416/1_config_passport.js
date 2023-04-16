const LocalStrategy = require('passport-local').Strategy;
// local로 하기 때문에 아이디랑 비밀번호를 가지고 로그인을 할거다. 라는 의미로 생각하면 됨
const bcrypt = require('bcryptjs');
// 암호화하는데 도움이 된다.

// Load User model
const User = require('../models/User'); // User스키마를 가져온다.

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({ 
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }
        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => { // 암호화 된 password랑 비교
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );
//1. serializeUser 를 작성하세요. // 로그인 성공시 호출하는
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

//2. deserializeUser 를 작성하세요.
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

};
