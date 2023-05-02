# React 기초
### 1) 오리엔테이션
- <b>React</b> : 사용자 인터페이스를 만들기 위한 `JS 라이브러리` 
  - <b>SPA(Single Page Application)</b> <-> MPA
  - 변경된 부분만 계산하여 다시 그리게 된다.
  - <b>Component</b> 
  - <b>Virtual DOM</b> : 가상 DOM
  - <b>JSX</b> : 템플릿 라이브러리
- 생산성, 재사용성 : <b>Component, Hook</b>
- 풍부한 자료, 라이브러리
- 다양한 사용처

### 2) React 맛보기
- Todo list 만들기 : JS / jQuery
- React로 변환해보기

### 3) React 특징 분석하기
- JS와 HTML이 짬뽕 = JSX
- 컴포넌트
- State : State가 변경될 때마다 컴포넌트가 다시 렌더링

### 4) Create React App (CRA)
- <script crossorigin src=""></script>
- React 프로젝트를 손쉽게 생성할 수 있도록 도와주는 '보일러플레이트(Boilerplate)'
- transcompile : Babel, 코드 번들링, Webpack

### 5) Node.js / NPM 소개
- Node.js : CRA으로 프로젝트 생성 시, 개발 환경 및 테스트 서버로 이용됨
- NPM : Node.js 환경에서 사용하는 각종 패키지들을 관리하는 저장소

### 6) React 프로젝트 생성해보기
- npx create-react-app 디렉토리명
- cd 디렉토리명
- npm start : 프로젝트 실행
  
### 6_추가) npm 명령어
- <b>npm install</b> : dependence(의존성 패키지) 설치
- <b>npm install 패키지명</b> : 원하는 패키지 내려받기
  - <b>npm install 패키지명@버전</b> : 특정 버전의 패키지 내려받기
  - ^(캐럿)
  - <b>npm install git레포지토리주소</b> : git 레포지토리부터 패키지 내려받기
- <b>npm start</b> : 프로젝트 실행
- <b>npm build</b> : 프로젝트 빌드 -> 배포시
- <b>Ctrl + C</b> : 명령 중지

### 6_추가) 디렉토리 구조 `참조`

### 7) 라이브러리 설치와 불러오기
- 설치한 라이브러리를 프로젝트 내에서 불러오기
  - <b>import 패키지명</b>
  - <b>import something from 패키지명</b>
  - <b>import { a, b } from 패키지명</b>
  - <b>import * as something from 패키지명</b>
- CSS 불러오기
  - import "./App.css"; `확장자까지 꼭 써주기`

### 7_추가) import 원하는 파일 불러오기
import defaultExport from "module-name";<br>
import * as name from "module-name";<br>
import { export1 } from "module-name";<br>
import { export1 as alias1 } from "module-name";<br>
import { export1 , export2 } from "module-name";<br>
import { foo , bar } from "module-name/path/to/specific/un-exported/file";<br>
import { export1 , export2 as alias2 , [...] } from "module-name";<br>
import defaultExport, { export1 [ , [...] ] } from "module-name";<br>
import defaultExport, * as name from "module-name";<br>
import "module-name";<br>