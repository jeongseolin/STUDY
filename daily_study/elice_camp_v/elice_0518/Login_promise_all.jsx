

import React, { useState } from "react";
import "./Login.css";
import * as API from "./Service/db";

export default function Login() {
  const [inputID, setInputID] = useState("");
  const [inputPWD, setInputPWD] = useState("");
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const [isLoading, setIsLoading] = useState(false);

  const handleIDChange = (e) => {
    setInputID(e.target.value);
  };

  const handlePWDChange = (e) => {
    setInputPWD(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const id = inputID;
    const pwd = inputPWD;

    /* 지사사항과 주어진 상태값을 이용하여 적절하게 handleClick을 정의해주세요. */

    setIsLoading(true);
    setData(undefined);
    setError(undefined);


    try {
      const result = await Promise.all([
        API.findUserById(id),
        API.checkValidation(id, pwd),
      ]);
      setData(result[0]);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  return (
    <div className="login">
      <div className="login-title">Login</div>
      <div className="login-form">
        <div className="login-form-input">
          <input
            name="id"
            type="text"
            value={inputID}
            placeholder="ID"
            onChange={handleIDChange}
          />
          <input
            name="pwd"
            type="text"
            value={inputPWD}
            placeholder="Password"
            onChange={handlePWDChange}
          />
        </div>
        <div className="login-form-submit">
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
      <div className="login-result">
        {/* 상태값에 따라 출력될 값을 정의해주세요. */}
        {isLoading ? "Loading..." : null}
        {data ? `Hello ${data.id}` : null}
        {error ? error : null}
      </div>
    </div>
  );
}