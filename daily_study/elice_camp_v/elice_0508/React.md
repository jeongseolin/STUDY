# React 심화
### 1) React 스타일링
- 번들 사이즈
- 앱 성능(animation, transition)
- 유지보수, 확장(flexbox, grid)

### 2) React 앱에서의 스타일링 방법
1) CSS import
   - namespace를 나눌 수 없음
   - 스타일이 겹칠 경우 cascading rule에 따라, 마지막에 나온 룰이 덮어씌워짐.
2) CSS module
   - class name 뒤에 겹치지 않는 `hash`를 붙임.
   - 두 단어 이상일 경우, class 명을 camelCase로 이름을 지음.
   - button class="input-with-button_button_`1G2gr`"
3) CSS-in-js
   - 자바스크립트 문법을 그대로 활용 -> 유지보수 가능, 확장성
   - React 컴포넌트를 사용하는 것처럼 사용
   - Sass 문법 활용 가능
   - import styled from "styled-components";
     const Container = styled.div``;

### 3) CSS, Sass
- CSS Box Model
  - `content-box < padding-box < border-box < margin-box`
    - content-box : width, height
    - padding, border는 content 밖의 영역
    - <b>`box-sizing:border-box`</b> 하면 padding, border를 width, height에 포함.
  - `inline, block` 두 가지 타입
  - normal flow에 따라 inline은 한 라인에 원소 바로 옆에 위치(가로 정렬) block은 다음 라인에 위치(세로 정렬)
- CSS Position
  - static, `relative, absolute`, fixed, sticky
    - ancestor : containing block이 static을 제외한 다른 position / 최상위 부모
    - viewport : 브라우저 스크린, 모바일 화면
    - scrolling ancestor = viewport
- CSS Units
  - px, pt, cm, in : 절대적인 길이
  - rem, em, % : `특정 값`(부모)에 상대적인 길이
  - vw, vh, vmin, vmax : `viewport`에 상대적인 길이
- <b>Sass</b>
  - .sass, .scss
  - CSS를 프로그래밍 언어적으로 활용하도록 확장
  - styled-components
  - <b>`&`</b> : 자기 자신을 나타내는 placeholder
  - <b>variable</b> 변수 선언 가능 
    - $color-red
  - <b>mixins, import, include</b>

### 4) CSS Flexbox
- 반응형 디자인 responsive design에 유리
- 1차원의 레이아웃, 가운데 정렬, 비율로 정렬 등을 처리할 때 유리
- <b>`container`</b>
  - flex-direction : 가로, 세로정렬
  - justify-content
  - align-items
  - flex-wrap
- <b>`item`</b>
  - flex-grow
  - flex-shrink
  - flex-basis
  - justify-self
  - align-self
  - order
- flex: 1; = 1 1 auto;
- flex: 0 0 120px;
  - flex-grow flex-shrink flex-basis