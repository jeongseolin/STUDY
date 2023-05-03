import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <span>{inputValue}</span>
    </div>
  );
}

export default App;
