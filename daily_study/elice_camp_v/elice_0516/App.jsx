import React, { useState } from "react";

function Counter4UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    const id = setInterval(() => {
      // setCount(count + 1);
      setCount((oldCount) => oldCount+1); // 콜백함수로 변경해줘야 한다.
    }, 1000);
    console.log('interval', id)
    return () => {
      console.log('unmount', id);
      clearInterval(id); // 클로저에 저장되어있는 setInterval의 id값을 알 수 있다.
    }
    // useEffect의 첫번째 파라미터는 콜백함수고 그 콜백함수의 리턴값은 함수고 그 함수는 컴포넌트가 제거 될 때 호출이 된다.
    // useEffect가 다시 실행될 때, 또 실행된다.
  },[]); // 딱 한번만 실행되게 하고 싶을 때 빈 배열을 넣어준다.
  return (
    <div>
      <h1>useEffect, setInterval</h1>
      {count}
    </div>
  );
}

function Counter1() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div>
      <h1>Counter - state, form</h1>
      <input
        type="number"
        value={step}
        onChange={(evt) => {
          setStep(Number(evt.target.value));
        }}
      />
      <button
        onClick={() => {
          setCount(count + step);
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter4UseEffect></Counter4UseEffect>
      <Counter1></Counter1>
    </div>
  );
}

export default App;