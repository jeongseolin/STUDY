import React from 'react';
import './App.css';

//정의된 이름
const name = 'Sara';

//클래스명이 Welcome인 컴포넌트를 작성합니다.
class Welcome extends React.Component {
  render() {
    return <h2>Welcome, {name}!</h2>;
  }
}

//컴포넌트를 호출하여 element에 저장합니다.
const element = <Welcome />;

export default element;
