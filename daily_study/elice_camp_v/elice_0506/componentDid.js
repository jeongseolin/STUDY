import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // State 데이터를 초기화 하는 메소드
    console.log('constructor() 호출');
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // 컴포넌트가 마운트 된  직후 호출되는 메소드
    console.log('componentDidMount() 호출');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 마운트 해제되어 제거되기 직전에 호출되는 메소드
    console.log('componentWillUnmount() 호출');
    clearInterval(this.timerID);
  }

  tick() {
    console.log('tick() 호출');
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // 클래스 컴포넌트에서 반드시 구현되어야 하는 메소드
    console.log('render() 호출');
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
