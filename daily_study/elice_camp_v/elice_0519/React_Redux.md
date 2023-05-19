# React 심화 1
### 1) Redux
- 앱 전체 상태를 구조적으로 관리하기 위한 라이브러리
- 상태 관리 패턴을 도입하여, 여러 개발자와 협업하고 싶을 때 유용
- Flux pattern
- logger, devtool
- redux.js.org 참고

### 2) 핵심 원칙
- Store는 단 하나, 모든 앱의 상태는 이곳에 보관됨
- 상태는 오직 읽을 수만 있다.
  - 재생산 -> 새로운 객체, 배열로 만들어서 활용해야 한다.
- 사이드 이펙트도 만들지 않아야 한다.
- <b>`Action`</b>
  - 상태의 변경을 나타내는 개념
  - 주로 `type`, `payload` 객체를 포함
- <b>`Action Creator`</b>
  - Action을 생성하는 함수
  - 재사용성, 하나의 레이어를 추가할수 있음
    - id: String(id). slice(1) -> Layer
- <b>`Store`</b>
  - createStore(reducer, initialState)
    - reducer는 새로운 상태를 만들어낸다.
    - Store는 그 상태를 저장
- <b>`Reducer`</b>
  - Action을 받아 새로운 State를 만듦
  - (state, action) => state
  - 사이트 이펙트가 없어야 한다. (console.log, axios.get 등)
- <b>`Dispatch`</b>
  - Action을 redux로 보내는 함수
  - middleware를 거쳐 reducer에 도달
- <b>`Selector`</b>
  - 특정 state 조각을 store로부터 가져오는 함수
  - raw data를 저장하고, 계산된 값 등을 selector로 가져오는 등의 패턴을 구사할 때 유용

### 2) Redux 구조
  - action은 dispatch 이후, middleware, enhancer등을 이용하여 redux를 확장하여 사용할 수 있음.
  - <b>`middleware`</b>
    - `redux-thunk` 라이브러리
    - `redux-logger` 라이브러리
    - `redux-saga` 라이브러리
  - <b>`enhancer`</b>
    - `redux-devtools`

### 3) redux-toolkit 활용
- helper 라이브러리
- <b>`configureStore`</b> : createStore, combineReducers
- <b>`createAction`</b> : Action creator
- <b>`createReducer`</b> : builder.addCase()
- <b>`createSlice`</b> : action creator, reducer
- <b>`createSelector`</b>
  
### 4) Redux를 React에 연결하기
- <b>`react-redux`</b>
  - `Provider` 컴포넌트
  - useDispatch : dispatch 함수 가져오는 API
  - useSelector : 데이터를 얻기 위한 API

### 5) Redux를 이용한 비동기 처리
- 비동기를 위한 middleware를 추가해야 한다.
- createAsyncThunk : fulfilled, rejected, pending
  - createAsyncThunk(action type, async callback(paload creator))
  - addPost.pending
  - addPost.fulfilled
  - addPost.rejected
- 연속적인 비동기 처리
  - thunk 함수를 dispatch
- 동시 비동기 처리
  - Promise.all
  
### 6) 