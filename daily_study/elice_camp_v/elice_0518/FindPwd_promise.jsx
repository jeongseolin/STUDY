
import React, { useState } from "react";
import "./FindPwd.css";
import { getInformation } from "./Service/db";

export default function FindPwd() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputData("");

    const id = inputData;

    /* 버튼 클릭 시 상태값을 변경하세요. */
    setIsLoading(true);
    setData(undefined);

    /* getInformation API를 이용해 데이터를 로드하세요. */
    getInformation(id)
      .then((resolved) => {
        setIsLoading(false);
        setData(resolved);
      })
      .catch((rejected) => {
        setIsLoading(false);
        setData(rejected);
      });
  };

  return (
    <div className="findpwd">
      <div className="findpwd-title">FindPWD</div>
      <div className="findpwd-form">
        <input type="text" value={inputData} onChange={handleChange} />
        <button onClick={handleClick}>Find</button>
      </div>
      <div className="findpwd-result">
        {/* 상태값에 따라 출력될 문자열을 정의하세요. */}
        {isLoading ? "Loading..." : data}
      </div>
    </div>
  );
}