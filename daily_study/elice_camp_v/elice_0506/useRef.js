import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <input ref={inputRef} />
      <button
        onClick={(event) => {
          alert(inputRef.current.value);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
