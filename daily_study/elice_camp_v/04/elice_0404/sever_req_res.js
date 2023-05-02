// express로 app 객체를 생성하세요.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("root page");
});

// response의 헤더 정보와 상태 코드를 설정하고, request의 params를 json 형태로 보내세요.
app.get("/:follow", (req, res) => { // URL를 /:follow 로 가지는 경로를 설정, URL에 입력되는 내용을 그대로 화면에 출력하도록 해라.
  res // response 는 아래와 같이 설정해라.
    .set({  // 헤더 정보는 아래와 같이 설정해라.
      "Content-Type": "text/json",
      ETag: "10000",
    })
    .status(201) // 상태 코드는 201로 설정
    .json(req.params); // 데이터는 json으로 보낸다.
});

// 8080번 포트로 서버를 여세요.
app.listen(8080);
