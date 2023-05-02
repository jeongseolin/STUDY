// index.js
const express = require('express');

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const setUser = require('./middlewares/set-user');
const adjuerQuery = require('./middlewares/adjust-query');


const app = express();

app.use(adjuerQuery);

app.get('/', (req, res) => {
    res.send("OK");
});

app.use('/users', setUser(), usersRouter); // type 인자값이 비어있기 때문에 유저 모드로 동작
app.use('/admin', setUser("admin"), adminRouter); // type 인자에 "admin"을 넣어 관리자 모드로 동작

app.listen(8080);





// set-user.js
const users = require('../data/users');
const admins = require('../data/admins');

const setUser = type => (req, res, next) => {
  // 앞에 화살표 함수 추가 : 리턴값으로 미들웨어 실행해라.
  // type에 따라서 "admin" 정보를 관리자 모드와 유저 모드로 동작할 수 있다.
  const { userName } = req.query;

  if (type === 'admin') {
    // "admin"이라는 문자열이 주어졌을때
    req.user = admins[userName]; // admins에서 userName으로 데이터를 찾아서 넣어줘라.
  } else {
    req.user = users[userName];
  }

  next();
};

module.exports = setUser;
