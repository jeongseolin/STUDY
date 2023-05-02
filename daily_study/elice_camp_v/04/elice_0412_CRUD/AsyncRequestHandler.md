# Async Request Handler
### 1) request handler의 오류처리
- promise( ).<b>catch(next)</b>
- async function, <b>try ~ catch, next</b>
  
### 2) async request handler
- asyncHandler는 requestHandler를 매개변수로 갖는 함수형 미들웨어
- 전달된 requestHandler는 try ~ catch로 감싸져 asyncHandler 내에서 실행
- throw 되는 에러는 자동으로 오류처리 미들웨어로 전달되도록 구성