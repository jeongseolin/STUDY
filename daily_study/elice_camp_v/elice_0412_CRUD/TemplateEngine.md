# Template Engine
### 1) Express.js의 템플릿 엔진
- EJS
- Mustache
- <b>Pug</b>
  - 들여쓰기 표현식, 가독성, 개발 생산성
  - <b>`layout`</b>(block), <b>`include`</b>, <b>`mixin`</b>(function) 등 강력한 기능 제공
  - <b>each in</b> : 주어진 배열의 값을 순환하며 HTML 태그를 만들 수 있음.
  - <b>if, else if, else</b> : 주어진 값의 조건을 확인하여 HTML 태그를 만들 수 있음.

### 2) Express.js와 `pug`의 연동
- <b>app.set( )</b> : 템플릿이 저장되는 디렉터리 지정
- <b>res.render(템플릿이름, 데이터)</b> : app.set에 지정된 값을 이용해 화면을 그리는 기능
- app.locals : 템플릿에 전역으로 사용될 값 지정
- <b>`$ express --view=pug myapp`</b> : 템플릿 엔진 지정