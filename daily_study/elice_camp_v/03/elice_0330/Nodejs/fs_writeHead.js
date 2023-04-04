// fs 모듈을 불러오세요.
var http = require("http");
var fs = require("fs");

// 서버를 생성하세요.
// fs 모듈의 readFileSync() 함수를 이용해 파일을 읽고, 화면에 출력해보세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var data = fs
      .readFileSync("poetry.txt", "utf-8") // poetry.txt에 있는 파일을 읽고, 화면에 그대로 출력하세요.
      .split("\n"); // 줄바꿈 반영
    for (var i = 0; i < data.length; i++) { // 반복문을 이용해 한 줄씩 출력하세요.
      res.write(data[i]);
      res.write("<br />"); // 한 줄씩 화면에 출력시 
    }

    res.end();
  })
  .listen(8080);
