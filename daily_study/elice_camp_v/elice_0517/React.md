# React 심화1
### 1) 상태 관리
- MPA(서버), SPA(클라이언트)
- 데이터 관리의 고도화

### 2) 상태 관리 기술이 해결하는 문제들
- 데이터 캐싱과 재활용
- Prop Drilling

### 3) Flux Pattern
- 웹 애플리케이션 아키텍처 패턴
- Unidirectional data flow (단방향 송신)
- 데이터 업데이트 시 한 번의 업데이트만을 만든다.
- 하나의 유저 인터렉션에 여러 Action을 생성할 수 있다. 예를 들어 특정버튼을 클릭했을 때 여러개의 액션을 만들 수 있다.
- `Flux 구조`
- Action -> Dispatcher -> Store -> View 

### 4) useState, useRef, useContext, useReducer
- <b>`useState`</b>
  - const [ state, setState ] = useState(initState | initFn)
  - + useEffect 사용가능
- <b>`useRef`</b>
  - 상태가 UI의 변경과 관계없을 때, 리렌더링을 최소화하는 상태 관리에 사용됨
- <b>`useContext`</b>
  - 컴포넌트와 컴포넌트 간 상태를 공유할 때 사용
  - 컨텍스트 API(createContext)
- <b>`useReducer`</b>
  - useState보다 복잡한 상태를 다룰 때 사용
  - 여러 개의 상태를 한꺼번에 관리하거나, 어떤 상태에 여러 가지 처리를 적용할 때 유용
  - const [ state, dispatch ] = useReducer(reducer, initState)

### 5) useState를 활용한 상태 관리
- 상태와 상태에 대한 변화가 단순하거나, 상대적으로 소규모 앱에서 사용하기에 적합

### 6) useContext를 활용한 상태 관리
- + useReducer 사용 : 복잡한 상태와 상태에 대한 변경 로직을 두 개 이상의 컴포넌트에서 구현 가능