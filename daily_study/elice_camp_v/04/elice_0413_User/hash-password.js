// index.js
const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const { User } = require('../models');
// 비밀번호의 해쉬값을 가져오는 파일 불러오기
const hashPassword = require('../utils/hash-password');

const router = Router();

router.get('/', (req, res) => {
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
  const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
  const user = await User.create({
      email,
      name,
      password : hashedPassword,
  }); // 회원 생성하기
  
  // 아래 코드 수정 시 오답으로 처리될 수 있습니다.
  console.log('신규 회원', user);
  
  res.redirect('/');
}));

module.exports = router;






// hash-password.js
const crypto = require('crypto');

module.exports = (password) => {
  const hash = crypto.createHash('sha1');
  hash.update(password);
  return hash.digest("hex"); // hex 16진수로 보낸다.
}