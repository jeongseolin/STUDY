# React 기초 2
### 1) Hooks
- 컴포넌트에서 데이터를 관리(State)하고, 데이터가 변경될 때 상호작용(Effect)을 하기 위해 사용한다.
- Hook의 이름은 반드시 <b>`use`</b>로 시작해야 한다.
- 최상위 Level에서만 Hook을 호출할 수 있다. (첫번째 {} 안에서 사용할 수 있다.)

### 2) State Hook과 Effect Hook
- State Hook
  - <b>`useState`()</b>
  - 컴포넌트 내 동적인 데이터를 관리할 수 있는 hook
  - const [state이름, setState이름] = useState(초기값)
- Effect Hook
  - <b>`useEffect`(EffectCallback, Deps)</b>
  - 함수 컴포넌트에서 side effect를 수행할 수 있다.
  - Deps : 배열 []

### 3) 이외의 Hooks
- useMemo(콜백함수, []) : `변수`를 메모이제이션
- useCallback(콜백함수, []) : `함수`를 메모이제이션 - 함수 반환
- useRef : 컴포넌트 생명 주기 내에서 유지할 ref 객체를 반환한다.
  - `.current`.focus()
  - `.current`.value()
  - `.current`.name()

### 4) 나만의 Hook 만들기
- Custom Hook
  - 로직의 재사용성을 높이기 위해서 사용
  - Hook의 이름은 `use`로 시작해야 한다.
  - Hook 내의 state는 공유되지 않는다.

### 5) 종합 실습 / 유용한 팁들
- Todo List 앱 만들기
  - Form 개발하기 : 데이터 입력 창구 만들기
    - State : 유저의 입력을 유동적으로 저장한다.
    - 이벤트 처리(핸들링) : onChange, onSubmit
  - 리스트 표현하기
    - Array 메소드(map)
  - 유연하게 State 변경하기
    - 리스트의 값을 변경 및 삭제하는 기능 구현
    - Object, Array를 값으로 갖는 State를 변경할 때 유의!
  - CSS로 꾸미기
    - import "./App.css"; // 확장자까지 적어줘야한다.
    - 스타일은 object로, Property name은 camelCase로
  - 부가 기능 구현
    - 완료 이펙트 추가
    - 개수 제한하기