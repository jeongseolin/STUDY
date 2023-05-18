    
import React, { useEffect, useState, useRef } from "react";
import "./ValidCheck.css";

export default function ValidCheck() {
  const [isCorrect, setIsCorrect] = useState(false);
  /* input과 select HTML Element를 제어할 수 있도록 ref 객체를 선언해주세요. */
  const inputRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    /* 컴포넌트 생성 시점에 input 태그가 focusing 되도록 코드를 추가해주세요. */
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    /* 버튼 클릭 이벤트를 처리하는 이벤트 핸들러를 작성해주세요. */
    inputRef.current.value === selectRef.current.value
      ? setIsCorrect(true)
      : setIsCorrect(false);

    inputRef.current.value = "";
    selectRef.current.value = "null";
  };

  return (
    <div className="validcheck">
      <div className="validcheck-title">ValidCheck</div>
      <div className="validcheck-content">
        <div className="validcheck-content-input">
          <input
            /* ref객체를 사용해 DOM에 접근할 수 있도록 프로퍼티를 추가해주세요. */
            ref={inputRef}
            type="text"
          />
          <select
            /* ref객체를 사용해 DOM에 접근할 수 있도록 프로퍼티를 추가해주세요. */
            ref={selectRef}
          >
            <option value="null">--Select Fruit--</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="mango">mango</option>
            <option value="watermelon">watermelon</option>
          </select>
        </div>
        <div className="validcheck-content-btn">
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      <div className="validcheck-footer">
        {isCorrect ? "Correct" : "Incorrect"}
      </div>
    </div>
  );
}