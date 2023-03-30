var http = require("http");

//1. 함수 `onRequest()` 인자에 req와 res를 넣어줍니다.
function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });

  // option + command + i : 개발자도구(F12) 창 열기
  // Network 메뉴칸 중에
  // Status code를 설정 (200 정상값 이라는 상태 반환) 
  // 2?? (200, 201, 202, ... ) => 성공
  // 4?? (400, 401, 402, ... ) => 에러 
  // Content-Type를 text로 한다 (text/plain 으로 설정)

  //2. html 본문(body)에 보여지는 부분을 입력하는 메서드인 res.write()를 사용해서 "Hello World"를 띄우세요.
  res.write("Hello World");

  //3. 응답을 종료하는 메서드인 res.end()를 작성하세요.
  res.end();


}

http.createServer(onRequest).listen(8080);
