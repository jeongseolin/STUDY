# React 기초
### 8) JSX
- Babel에 의해서 Transcompile 된다.
- 개발자 편의성 향상
- 협업에 용이 / 생산성 향상
- 문법 오류와 코드량 감소
- HTML 태그 내에 JS 연산
- <b>className</b> : class명 입력
- <b>스타일은 object로</b> : { } 중괄호 사용, property name은 `camelCase`로 적어야 함 (ex. fontSize, paddingLeft)
  - style={{ padding: "48px", color: "red", backgroundColor: "blue" }}
- <b>닫는 태그 필수</b> : (ex. `/>`)
- <b>최상단 element는 반드시 하나</b> : `<> {/* React.Fragment */}`

### 9) 컴포넌트
- React에서 페이지를 구성하는 최소단위
- Component의 이름은 `대문자`로 시작
- Class Component / <b>Function Component</b>
- Controlled Component - `State 직접 관리` / Uncontrolled Component
- 컴포넌트끼리 데이터를 주고받을 땐 <b>`Props`</b>
- 컴포넌트 내에서 데이터를 관리할 땐 <b>`State`</b>
- 데이터는 부모 -> 자식으로만 전달