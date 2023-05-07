import './App.css';

// 지시사항에 따라 출력 결과와 동일한 동작을 하는 코드를 작성하세요.
import React, { useState } from 'react';

function App() {
  const [apple, setApple] = useState(5);

  return (
    <div>
      <p>당신에게 {apple}개의 사과가 남았습니다.</p>
      <button onClick={() => setApple(apple - 1)}>Eat apple</button>
      <button onClick={() => setApple(apple + 1)}>Buy apple</button>
    </div>
  );
}

export default App;
