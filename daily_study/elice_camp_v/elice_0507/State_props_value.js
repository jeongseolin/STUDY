import React, { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: '',
    age: 20,
    school: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <input name="name" value={person.name} onChange={handleInputChange} />
      <input name="age" value={person.age} onChange={handleInputChange} />
      <input name="school" value={person.school} onChange={handleInputChange} />
      <p>
        {person.name}님은 {person.school}에 재학 중이며 현재 {person.age}
        세입니다.
      </p>
    </div>
  );
}

export default App;
