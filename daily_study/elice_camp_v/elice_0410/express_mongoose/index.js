const express = require('express'); // 각 패키지 require로드
const mongoose = require('mongoose');

const postsRouter = require('./routes/posts');

const app = express(); // express app 생성

mongoose.connect("mongodb://localhost:27017/exam_7"); // mongoose에 커넥트

mongoose.connection.on("connected", () => { // connected 이벤트 추가, 연결이 완료되면, console.log 출력
  console.log("Successfully connected to MongoDB");
})

app.get('/', (req, res) => {
  res.send("OK");
});

app.use('/posts', postsRouter);

app.listen(8080);