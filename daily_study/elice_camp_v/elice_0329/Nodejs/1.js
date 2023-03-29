// http 모듈을 불러옵니다.
const http = require('http'); // http 모듈은 Node.js에서 가장 기본적이고 중요한 웹 모듈로,
                              // 서버나 클라이언트와 관련된 기능을 제공한다.

// "Hello Elice!"를 출력하는 서버 객체를 만듭니다.
const server = http.createServer((req, res) => { // 함수로 요청받고 응답할 수 있는 http.Server 객체를 만든다.
  res.statusCode = 200; // http 응답 코드는 200
  res.setHeader('Content-Type', 'text/html'); // Content-Type은 text/html로 설정합니다.
  res.end('Hello Elice!\n');
});

// 8080 포트로 서버를 시작합니다.
server.listen(8080, () => { // 반환되는 http.Serverr객체를 8080포트로 열어 서버를 시작하세요.
  console.log('Server running at http://localhost:8080/');
});