// 계층적 구조의 라우터 사용하기
// 상위 index.js & pets폴더
// 하위(pets폴더) users.js & pets.js





//index.js
const express = require('express');

const userRouter = require('./routes/users');

const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

/* 라우터를 '/users' 경로에 연결 */
app.use('/users', userRouter);

app.listen(8080);





//users.js
const { Router } = require('express');
const petsRouter = require('./pets');

const router = Router();

router.get('/', (req, res) => {
    res.send('GET /users');
});

/* /:userId/pets 경로에 petsRouter 연결 */
router.use('/:userId/pets', petsRouter);

module.exports = router;




// pets.js
const { Router } = require('express');

const router = Router({ mergeParams: true });

/* GET 라우팅 추가 */
router.get('/', (req, res) => {
  res.send(`Pets of user ${req.params.userId}`);
});

module.exports = router;
