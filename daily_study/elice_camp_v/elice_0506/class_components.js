import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//클래스 컴포넌트를 사용하여 Clock컴포넌트를 작성합니다.
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

//매초 마다 호출되는 함수
function App() {
  //Clock 컴포넌트를 호출하고 현재 시간을 props로 넘겨줍니다.
  const element = <Clock date={new Date()} />;
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
