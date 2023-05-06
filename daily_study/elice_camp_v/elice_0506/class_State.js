import React from 'react';
import './App.css';

//현재시간을 출력하는 컴포넌트
class Clock extends React.Component {
  //constructor()메소드를 추가합니다.
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  //props를 state로 변경합니다.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

//Clock 컴포넌트를 호출합니다.
const element = <Clock />;

function App() {
  return element;
}

export default App;
