// 한 개의 이벤트 핸들러를 여러 Element에 재사용하기
import React, { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: '김민수',
    school: '엘리스대학교',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerson((current) => {
      const newPerson = { ...current };
      newPerson[name] = value;
      return newPerson;
    });
  };
  return (
    <div className="App">
      <input name="name" value={person.name} />
      <input name="school" value={person.school} />
      <button
        onClick={() => {
          alert(`${person.name}님은 ${person.school}에 재학중입니다.`);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
