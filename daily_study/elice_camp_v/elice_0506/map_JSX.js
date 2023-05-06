import React, { useState } from 'react';
import './App.css';

function CurriculumPage(props) {
  //React의 목차 출력
  const contents = (
    <div>
      {props.curriculum.map((curriculum) => (
        <li key={curriculum.id}>{curriculum.title}</li>
      ))}
    </div>
  );
  //React의 목차 별 세부 내용 출력
  const subcontents = props.curriculum.map((curriculum) => (
    <div key={curriculum.id}>
      <h3>{curriculum.title}</h3>
      <p>{curriculum.detail}</p>
    </div>
  ));

  return (
    <div>
      <h2>React과목 커리큘럼</h2>
      <ul>
        {/* JSX와 map()을 활용하여 reactCurriculum의 title을 출력하는 코드를 작성합니다. */}
        {contents}
      </ul>
      <hr />
      {/* JSX와 map()을 활용하여 reactCurriculum의 title과 detail을 출력하는 코드를 작성합니다.  */}
      {subcontents}
    </div>
  );
}

export default App;
