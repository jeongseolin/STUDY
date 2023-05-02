# Node.js와 MongoDB
### 1) 웹의 이해
- World Wide Web
- 인터넷 상에서 동작하는 모든 서비스
- 웹 = 웹사이트
  
### 2) 웹 서비스 동작방식
- 웹 서비스는 <b>HTTP 요청과 응답의 반복</b>으로 이루어짐
- 사용자 / 웹 브라우저(클라이언트) / 인터넷 / 서버
  - <b>프론트엔드</b>, 사용자가 직접 사용하게 되는 웹 페이지를 주로 담당 = 클라이언트
  - <b>백엔드</b>, 사용자에게 보이지 않는 데이터 가공 등의 기능을 주로 담당 = 서버
- 정적 웹(WEB 1.0), 동적 웹(WEB 2.0, 상호작용)
- 동적 웹 구현방법 : <b>CSR, SSR</b>
  - CSR (Client-Side Rendering) - 프론트엔드
  - SSR (Server-Side Rendering) - 백엔드
  
### 3) 웹 프레임워크
- 웹 서비스에 필요한 기능들을 제공해주는 다양한 도구들의 모음
- 웹 서비스의 정형화 된 구성을 많은 웹 프레임워크가 기본적으로 제공
  - HTTP 요청/응답 처리
  - `라우팅` : HTTP 요청을 분기, 알맞은 응답의 경로를 미리 설정
  - HTML Templating : SSR을 구현하기 위한 방법, 페이지의 뼈대작성
- Node.js의 웹 프레임워크
  - `Express.js`
  - Koa.js
  - Nest.js

### 4) Express.js
- 필요에 따라 유연하게 구조 설정 가능
- 다양한 미들웨어를 통해 필요한 기능을 간단하게 추가 가능
- 모든 동작이 명시적으로 구성
- <b>npm init express</b> : 직접 생성
- <b>express-generator</b> : 프로젝트 생성기 제공
- <b>npx express-generator</b>

### 5) npm init으로 express.js 시작하기
- <b>mkdir</b> : 새로운 디렉터리 생성
- <b>cd</b> : 해당 디렉터리로 이동
- <b>npm init</b> : 프로젝트 생성
- <b>npm i express</b> : express 패키지 추가
- 서버 생성(index.js)
  - const express = require('express');
  - const app = express();
  - app.get('/', (req,res) => { res. send("hello express"); }); // get 라우터 추가
  - app.listen(3000, () => { console.log("SERVER STARTED"); }) // 3000번 포트에 서버를 열겠다. 서버가 열린 후, 다음 콜백을 실행해라.
- package.json
  - "script" : { "start": "node index.js" } // 내용 추가
- <b>npm start</b> : 서버 시작
- 브라우저
  - locallhost:3000
- <b>ctrl + c, Y</b> : 서버종료
  
### 6) express-generator로 express.js 시작하기
- <b>npm i -g express-generator</b> : 패키지를 전역패키지로 추가
- <b>express my-server</b> : my-server라는 이름으로 express 생성(자동으로 my-server라는 디렉토리가 만들어지고, 그 하위에 다양한 파일들이 생성된다.)
- <b>cd</b> : 그 my-server로 이동
- <b>npm i</b> : 필요한 패키지 전부 설치
- <b>npm start</b> : express-generator로 생성된 서버를 실행
- 브라우저
  - locallhost:3000

### 7) Express.js의 구조
- 기본구조 : app.js, bin/www, package.json, public, routes, views

### 8) Express.js 동작방식
1. 브라우저에 localhost:3000 접속
2. app.js -> app.use('/', indexRouter);
3. routes/index.js -> router.get('/', ...
4. routes/index.js -> res.render('index', ...
5. views/index.jade // HTML Templating
   
- app.js
  - var express = require('express');
  - ...
  - var app = express(); // app 객체는 Express.js의 기능을 담은 객체
- Express.js의 모든 동작은 app 객체에 정의됨
- app 객체 - 주요 기능<br>
  a) app.use() : 미들웨어를 사용하기 위한 함수<br>
  b) app.listen() : http 서버 생성<br>
  c) app.locals() : app에서 사용할 공통 상수<br>

- 라우팅
  - <b>app 라우팅</b> : get, post, put, delete, all
  - <b>Express.Router</b> : 라우팅을 모듈화 - 그룹화, get, put, post, delete + `app.use('/', userRouter)`
  - 첫번째 인자 '/' URL, 마지막 인자 ' ' 실행될 함수
  - <b>path parameter</b> : 주소의 일부를 변수처럼 사용
  - <b>Request Handler</b> : 라우팅에 적용되는 함수, 가장 마지막 인자로 전달되는 함수 (req, res) => { }

- Request Handler - Request 객체
  - req.params : :참조
  - req.queries : ?참조
  - req.body : post 요청데이터 활용
  - req.get('') : 헤더값 활용

- Request Handler - Response 객체
  - res.send() : text 형식의 HTTP 응답
  - res.json() : json 형식의 HTTP 응답
  - res.render() : HTML Template을 사용하여 화면 전송
  - res.set() : HTTP 응답의 헤더 설정
  - res.status() : HTTP 응답의 상태 값 설정