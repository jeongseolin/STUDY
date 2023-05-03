// Greeting.js
import React from 'react';

const Greeting = ({ username }) => {
  return <h1>{username}님 안녕하세요.</h1>;
};

export default Greeting;

// App.js
import React, { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
  const [username, setUsername] = useState('');
   return (
    <div className="App">
        <input value={username} onChange={(event) => { setUsername(event.target.value); }} />
        <Greeting username={username}/>
    </div>
  );
}

export default App;
