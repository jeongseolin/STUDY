// index.js
// express로 app 객체를 생성하고, 8080포트로 서버를 여세요.
const express = require("express");
const bookRouter = require("./routes/books");

const app = express();

app.get("/", (req, res) => {
  res.send("root page");
});

// 라우터를 "/books" 경로에 연결하세요.
app.use("/books", bookRouter);

app.listen(8080);





// books.js
// Router를 이용해 GET 요청을 처리하는 API를 라우팅하세요.
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("some books");
});

module.exports = router;
