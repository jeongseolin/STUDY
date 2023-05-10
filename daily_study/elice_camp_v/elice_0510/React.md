# React 심화 1
### 1) SPA와 라우팅
- SPA : Single Page Application <-> MPA(Multi)
- 모바일 앱 같은 경험을 느낌
- Client-side routing, AJAX
- CDN 캐싱
- SEO : Search Engine Optimization(검색엔진 최적화)에 불리함
- History API, URL Hash를 이용해 페이지 리로드 없는 페이지 전환을 구현
- visibilitychange, popstate, beforeunload 이벤트 핸들러
- `react-router, reach-router` 라이브러리 활용

### 2) react-router
- Declarative routing for React
- URL parameter : query, path variable
- <b>BrowserRouter</b>
  - 반드시 Context 안에서만 BrowserRouter가 동작한다.
- <b>Switch</b> : 매칭되는 라우터 하나만 렌더링한다.
- Route로 path를 정의하고, 그 안에 렌더링하고자 하는 컴포넌트를 넣음
  - Rote path="/about"
- NavLink : 매칭되는 패스링크가 자기 자신일때, 강조처리 되는 특징이 있음

### 3) react-router 컴포넌트
- <b>`BrowserRouter`</b>
  - basename="/ko" : 언어관련 페이지 지정 가능
- <b>`Switch`</b>
  - fallback, 404 Not Found Page
- <b>`Route`</b>
  - path와 컴포넌트를 매칭
  - children / component prop
  - exact : 정확하게 매칭하는 path를 설정함
- <b>`Redirect`</b>
  - to prop : 지정한 path로 이동
  - Switch 안에서 쓰일 경우, from, to를 받아 이동하게 만듦
    - from="/" to="/login"
- <b>`Link, NavLink`</b>
  - to prop, 클릭 시 네비게이션 함
  - anchor tag
  - to에 location object(hash, pathname, state)나 함수를 받을 수 있음
- useHistory, useLocation, useParams, useRouteMatch

### 4) react-router 응용
- Private Route
  - declarative
  - imperative
- query string