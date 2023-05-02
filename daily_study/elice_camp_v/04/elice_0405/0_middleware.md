# Node.js와 MongoDB
## 02. Express.js와 REST API
### 1) Express.js의 Middleware
- Middleware 란?
  - HTTP 요청과 응답 사이에서 <b>단계별 동작을 수행해주는 함수</b>
  - 필요한 동작 방식에 따라 미들웨어를 적용할 위치 결정 (<b>어플리케이션 미들웨어, 라우터 미들웨어, 오류처리 미들웨어)</b>
  - use나 http method 함수에 <b>여러 개의 미들웨어를 동시에 적용</b>할 수 있음 (<b>middleware sub-stack</b>)
  - <b>함수형 middleware</b> : 하나의 미들웨어를 작성하고, 작동모드를 선택하면서 사용하고 싶을 경우, API 별로 사용자의 권한을 다르게 제한하고 싶은 경우
- Middlesare의 작성과 사용
  - <b>req, res, next</b>를 가진 함수를 작성
  - req : HTTP 요청을 처리하는 객체
  - res : HTTP 응답을 처리하는 객체
  - next : 다음 미들웨어를 실행하는 함수, next 함수에 인자를 전달하면 오류처리 미들웨어가 실행된다.
  - err 파라미터 추가가능
- Route Handler와 middleware
  - Route Handler도 <b>미들웨어의 한 종류</b>
  - <b>라우팅 함수(get,post,put,delete,all)</b> + path parameter 사용
- Middleware Libraries
  - Express.js 홈페이지, npm 온라인 저장소에서 찾아볼 수 있음
  - cors, multer, passport 등
  
### 2) REST API
- REST 아키텍쳐를 준수하는 웹 API, (= RESTful API)
- API 란?
  - Application Programming Interface
  - 서비스나 프로그램 간에 <b>미리 정해진 기능을 실행할 수 있도록 하는 규약</b>
- REST 란?
  - REpresentational State Transfer
  - 웹에서 자료를 전송하기 위한 표현 방법에 대한 아키텍쳐
- REST API 기본 가이드 - <b>HTTP Method</b>의 사용
  - `HTTP method + 명사형 URL`로 표현
  - get(가져오기), post(새로 만들기), put(수정하기), delete(삭제하기)
  
### 3) JSON
- JavaScript Object Notation
- 자바스크립트에서 객체를 표현하는 표현식
- 웹 API에서 데이터를 전송할 때 표현식으로 주로 사용됨
- `객체를 웹 API를 통해서 문자열로 전달`하기 위해 JSON을 사용
- JSON(적은 표현식, 효과적 데이터 전달) vs XML
  
### 4) Express.js로 REST API 구현하기
- MVC 패턴
  - 프로젝트 기능들을 어떻게 분리할지에 대한 하나의 구성 방법
  - Model - View - Controller
  - Model : 데이터 읽고, 쓰기
  - View : 데이터 표현
  - Controller : Model을 통해 데이터에 접근하여, 처리 결과를 View로 전달하는 기능 (= 라우팅 기능)
- 실습사용 *** (간단한 메모 작성, 수정, 삭제 구현하기)
  - list, map, find, create, push, update, findIndex, delete, some, filter 함수
  - get, post, put, delete http 메소드

### 5) Postman 사용하기
- Postman 란?
  - API를 테스트할 수 있는 도구
  1. Postman 가입, Workspaces 생성
  2. API 문서화하기 : collection 만들기, api request 만들기, document 작성하기, 전체 문서 확인하기(View documentation)
  3. API 테스트 하기 : HTTP Method 설정하기, query param 사용하기, path variable 사용하기 `{{변수명}}`, body 사용하기 raw탭 - json선택