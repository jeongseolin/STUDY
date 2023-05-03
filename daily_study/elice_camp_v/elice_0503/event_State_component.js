// MyForm.js
import React from 'react';

const MyForm = ({ onChange }) => {
  return <input onChange={onChange} />;
};

export default MyForm;


// App.js
import React, { useState } from 'react';
import MyForm from './components/MyForm';

function App() {
  const [username, setUserName] = useState('');
  return (
    <div className="App">
        <h1>{username}님 환영합니다.</h1>
        <MyForm onChange={(event) => {
            setUserName(event.target.value);
        }}/>
    </div>
  );
}

export default App;
