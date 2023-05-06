import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//현재시간을 출력하는 컴포넌트
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>현재 시간: {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

//매초 마다 호출되는 함수
function App() {
  //Clock 컴포넌트를 호출합니다.
  const element = <Clock date={new Date()} />;

  //ReactDOM에 element을 렌더링합니다.
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
