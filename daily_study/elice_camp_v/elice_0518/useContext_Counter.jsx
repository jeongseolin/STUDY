
import React from "react";
import "./Counter.css";
/* GlobalState.jsx에서 context를 반환하는 함수를 import 해주세요. */
import { useGlobalStateContext } from "./GlobalState";

export default function Counter() {
  /* context API를 사용하여 전역으로 관리되는 상태값을 불러오세요. */
  const { count, setCount } = useGlobalStateContext();

  const handleMinus = () => {
    /* count의 값을 1 감소시킵니다. */
    setCount((prev) => prev - 1);
  };

  const handleZero = () => {
    /* count의 값을 0으로 초기화합니다. */
    setCount(0);
  };

  const handlePlus = () => {
    /* count의 값을 1 증가시킵니다. */
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter">
      <div className="counter-title">Counter</div>
      <div className="counter-content">{count}</div>
      <div className="counter-footer">
        <button onClick={handleMinus}>-</button>
        <button onClick={handleZero}>0</button>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}