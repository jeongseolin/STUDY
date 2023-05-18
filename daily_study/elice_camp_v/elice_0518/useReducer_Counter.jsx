
import React, { useReducer } from "react";
import "./ReducerCounter.css";

function myReducer(state, action) {
  switch (action.type) {
    case "INC":
      /* "INC" action에 대해 state를 변경해주세요.  */
      return { count: state.count + 1 };
    case "DEC":
      /* "DEC" action에 대해 state를 변경해주세요. */
      return { count: state.count - 1 };
    case "ZERO":
      /* "ZERO" action에 대해 state를 변경해주세요. */
      return { count: 0 };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

export default function ReducerCounter() {
  /* useReducer를 활용하여 state와 dispatch함수를 정의해주세요. */
  const [state, dispatch] = useReducer(myReducer, initialState);

  const handleMinus = () => {
    /* 카운터 값을 감소시키는 액션을 발생시킵니다. */
    dispatch({ type: "DEC" });
  };

  const handleZero = () => {
    /* 카운터 값을 0으로 초기화시키는 액션을 발생시킵니다. */
    dispatch({ type: "ZERO" });
  };

  const handlePlus = () => {
    /* 카운터 값을 증가시키는 액션을 발생시킵니다. */
    dispatch({ type: "INC" });
  };

  return (
    <div className="reducercounter">
      <div className="reducercounter-title">Counter</div>
      <div className="reducercounter-content">{state.count}</div>
      <div className="reducercounter-footer">
        <button onClick={handleMinus}>-</button>
        <button onClick={handleZero}>0</button>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}