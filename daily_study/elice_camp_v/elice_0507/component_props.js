import React from 'react';
import './App.css';

//함수 컴포넌트를 사용하여 Subject컴포넌트를 정의합니다.
function Subject(props) {
  return <h3>React를 이해하기 위해서는 {props.name}을(를) 알아야 합니다.</h3>;
}

//App 컴포넌트를 정의합니다.
function App() {
  return (
    <div>
      <Subject name="HTML" />
      <Subject name="CSS" />
      <Subject name="JavaScript" />
    </div>
  );
}

//생성한 컴포넌트를 export하여 index.js에서 렌더링합니다.
export default App;
