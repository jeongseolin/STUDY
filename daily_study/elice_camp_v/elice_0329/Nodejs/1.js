// http 모듈을 불러옵니다.
const http = require('http');

// "Hello Elice!"를 출력하는 서버 객체를 만듭니다.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Elice!");
  })
  .listen(8080); // 8080 포트로 서버를 시작합니다.