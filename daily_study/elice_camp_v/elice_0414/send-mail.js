// send-mail.js
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '', // '자신의 구글 계정'
        pass: '', // '앱 비밀번호'
    },
}); // nodemailer 로 gmail transport 생성하기 

module.exports = (to, subject, text) => new Promise((resolve, reject) => {
  const message = {
    // userTo 변수에는 이메일을 받는 사람의 이메일 주소를 적어주세요.
    from: userTo,
    to,
    subject,
    text,
  };
  
  transport.sendMail(message, (err, info) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(info);
  });
});





// index.js
const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const sendMail = require('../utils/send-mail');
const { User } = require('../models');
const secretMessage = require('../secret-message');

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/send-message');
  return;
  
  if(req.user) {
    res.redirect('/posts');
    return;
  }
  
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
    
  res.redirect('/');
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/send-message', (req, res) => {
  res.render('mail')
})

router.post('/send-message', asyncHandler(async (req, res) => {
  const { email } = req.body;
  // SECRET MESSAGE: ELICE IS AWESOME PLATFORM
  await sendMail(email, "You've received a message", secretMessage);
  res.send("메일이 발송되었습니다.");
}));

module.exports = router;