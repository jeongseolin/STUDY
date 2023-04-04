# Node.js와 MongoDB
### 1) NPM과 모듈
- NPM 이란?<br>
  . Node Package Manager<br>
  . Node.js 프로젝트를 관리하는 필수적인 도구<br>
  . 수많은 <b>오픈소스 라이브러리와 도구</b>들이 업로드되는 저장소<br>
  . (* 라이브러리 : 다른 사람이 구현한 것을 사용하는 방법, 패키지)

- NPM 사용<br>
  a) <b>npm init</b> : 프로젝트 디렉터리 생성, `package.json` 파일 생성<br>
  b) <b>npm install [package-name]</b> : 프로젝트 의존성 관리, 전역 패키지 추가<br>
  c) <b>npm remove [package-name]</b> : 의존성 패키지 삭제<br>
  d) <b>npm run [script-name]</b> : 스크립트 실행, <b>test, start, stop</b>

- package.json<br>
  . 프로젝트 관련 정보들이 저장되는 파일,<br>
  . 직접 수정 or npm 명령어를 사용해 프로젝트 정보 수정 가능<br>
  . 프로젝트에 의존성을 추가하면 `package-lock.json`이라는 파일 생성<br>
  . `의존성 관리` : dependencies(직접 사용 모듈), devDependencies(개발용 의존성, 서포트 툴)<br>
  . `의존성 버전 표기법` : <b>npm install [package-name]@[version]</b>으로 패키지 버전을 지정할 수 있음<br>
  . 의존성 저장 디렉토리 `node_modules`

### 2) 실습
- 명령어
  - npm i : npm install
  - npm i [ ] --save-dev : 개발용 의존성 설치
  - cat : 파일 내용 확인
  - ls : 디렉토리 확인
  - rmdir : 디렉토리 삭제
  - clear : 터미널 출력 내역 지우기
  - npm run : 스크립트 실행
  - npm remove : 패키지 삭제(node_modules 파일도 같이 삭제)

### 3) NPX
