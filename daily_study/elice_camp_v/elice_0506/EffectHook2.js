// Greeting.js
import React, { useEffect } from 'react';
const Greeting = () => {
  useEffect(() => {
    console.log('컴포넌트가 생성되었습니다.');
    return () => {
      console.log('컴포넌트가 소멸되었습니다.');
    };
  }, []);
  return <h1>안녕하세요.</h1>;
};
export default Greeting;

// App.js
import React, {useState} from 'react';
import Greeting from './components/Greeting';

function App() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div className="App">
        <button onClick={() => {setIsCreated((current) => {
            return !current;
        })}}>컴포넌트 생성/제거</button>
        {isCreated && <Greeting />}
    </div>
  );
}

export default App;
