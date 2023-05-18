import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    /* Wrapper 컴포넌트에 props를 전달하세요. */
    <Wrapper count={count} setCount={setCount} />
  );
}

function Wrapper(props) {
  return (
    <div className="wrapper" style={{ backgroundColor: "ivory" }}>
      { /* Main 컴포넌트에 props를 전달하세요. */ }
      <Main count={props.count} setCount={props.setCount} />
    </div>
  );
}

function Main(props) {
  return (
    <div className="counter">
      <div className="counter-title">Counter</div>
      { /* Content 컴포넌트에 props를 전달하세요. */ }
      <Content count={props.count} setCount={props.setCount} />
    </div>
  );
}

/* props로 데이터를 불러옵니다. */
function Content(props) {
  const handleMinus = () => {
    /* count의 값을 1 감소시킵니다. */
    props.setCount((prev) => prev - 1);
  };

  const handleZero = () => {
    /* count의 값을 0으로 초기화합니다. */
    props.setCount(0);
  };

  const handlePlus = () => {
    /* count의 값을 1 증가시킵니다. */
    props.setCount((prev) => prev + 1);
  };

  return (
    <div>
      { /* 카운트를 출력하세요. */ }
      <div className="counter-content">{props.count}</div>
      <div className="counter-footer">
        <button onClick={handleMinus}>-</button>
        <button onClick={handleZero}>0</button>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}