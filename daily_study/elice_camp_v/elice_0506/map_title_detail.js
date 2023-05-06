import React, { useState } from 'react';
import './App.css';

function App(props) {
  //React의 목차를 출력하는 contents를 정의합니다.
  const contents = props.curriculum.map((curriculum) => (
    <li key={curriculum.id}>{curriculum.title}</li>
  ));

  //React의 목차 별 세부 내용을 출력하는 subcontents를 정의합니다.
  const subcontents = props.curriculum.map((curriculum) => (
    <div key={curriculum.id}>
      <h3>{curriculum.title}</h3>
      <p>{curriculum.detail}</p>
    </div>
  ));

  return (
    <div>
      <h2>React과목 커리큘럼</h2>
      <ul>{contents}</ul>
      <hr />
      {subcontents}
    </div>
  );
}

export default App;
