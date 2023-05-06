// useToggle.js
import React, { useState } from 'react';

const useToggle = (args) => {
  // 초기값은 useToggle 함수의 매개변수로부터 입력받도록 합니다.
  const [isOn, setIsOn] = useState(args);
  const toggle = () => {
    setIsOn((current) => {
      return !current;
    });
  };
  return { isOn, toggle };
};

export default useToggle;

// App.js
import React from 'react';
import useToggle from './hooks/useToggle';

function App() {
  const { isOn, toggle } = useToggle(false); // 초기값 false
  return (
    <div className="App">
        <button onClick={() => {
            toggle();
        }}>
            {!isOn ? "켜짐" : "꺼짐"}
        </button>
    </div>
  );
}

export default App;
