// index.js
// 8080번 포트를 이용해 서버를 열고,routes 폴더에 있는 두 라우터를 등록하세요.
const express = require('express');
const app = express();
const midtermRouter = require('./routes/midterm');
const finalRouter = require('./routes/final');

app.get('/', (req,res) => {
    res.send("테스트를 시작하겠습니다!");
});



// midterm.js는 "/midterm" 경로에, final.js는 "/final" 경로에 연결하세요.
app.use('/midterm', midtermRouter);
app.use('/final', finalRouter);

app.listen(8080);


// midterm.js
// "중간고사입니다."를 출력하는 라우터를 정의하고 export하세요.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('중간고사입니다.');
});

module.exports = router;




// final.js
// "기말고사입니다."를 출력하는 라우터를 정의하고 export하세요.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('기말고사입니다.');
});

module.exports = router;