// GET 요청하기
var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
const port = 8080;

//1. createServer()는 request와 response이라는 두 개의 매개변수가 있는 함수입니다. http에 이 함수를 호출하세요.
var server = http
  .createServer(function (req, res) {
    //2.요청 방식이 Get일 경우에 index.html 파일을 웹에 띄워주세요. (true를 수정하세요.)
    if (true) {
      fs.readFile("./index.html", "utf8", function (error, data) {
          if (error) {
              res.writeHead(404);
              res.end("404 not Found");
          } else {
              res.writeHead(200, { "Content-Type": "text/html"});
              res.end(data);
          }
        //3.response 객체의 메소드인 writeHead 를 사용하여 type 을 결정합니다.
        //헤더 요청 보내기
        //4. 응답 종료하기
        
      });
    } 
  })
  .listen(port, function () {
    console.log("Server is running...");
  });
