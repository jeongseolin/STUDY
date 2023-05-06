import React from 'react';
import './App.css';

function App() {
  //이벤트를 등록합니다.
  function handleClick(event) {
    event.preventDefault();
    alert('버튼이 클릭되었습니다.');
  }

  //a 태그에 이벤트를 등록합니다.
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

export default App;
