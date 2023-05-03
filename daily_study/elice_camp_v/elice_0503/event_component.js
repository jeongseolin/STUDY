// Greeting.js
import React from 'react';

const Greeting = () => {
  const handleClick = (event) => {
    alert('안녕하세요.');
  };
  return <button onClick={handleClick}>클릭</button>;
};

export default Greeting;

// App.js
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
        <Greeting/>
    </div>
  );
}

export default App;
