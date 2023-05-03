import React from 'react';
import './App.css';

//element 객체를 생성합니다.
const element = React.createElement(
  'h2',
  { className: 'welcome' },
  '코더랜드에 오신것을 환영합니다:)'
);

function App() {
  return element;
}

export default App;
