# React 기초 2
### 3) 이벤트
- 이벤트(event) : HTML요소에 대한 사건의 발생, 유저의 행동, 개발자가 의도한 로직
- 이벤트 핸들러 함수 - 핸들링 함수, 익명 함수 - 이벤트 object
- DOM 이벤트
  - onClick
  - onChange(input)
  - onKeyDown, onKeyUp, onKeyPass
  - onDoubleClick
  - onFocus, onBlur
  - onSubmit(form)

### 4) 컴포넌트 내 이벤트 처리
- 여러 Input 동시에 처리하기
  - object key를 동적으로 할당한다.

### 5) 다른 컴포넌트로 이벤트 전달
- 컴포넌트간 이벤트 전달하기 : `부모` 컴포넌트에서 가져와서 활용 가능
- 커스텀 이벤트 : 세 번 누르면 긴급호출
- 이벤트 명명법 : <b>on + 동사, on + 명사 + 동사</b>