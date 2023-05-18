
import React, { useState } from "react";
import { getInformation } from "./Service/db";
import "./UserInfo.css";

export default function UserInfo(){
  const [err, setErr] = useState(undefined);
  const [info, setInfo] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  /* Callback 함수를 정의해주세요. */
  const loadDataCallback = (error, information) => {
    setIsLoading(false);

    if (error) {
      setErr(error);
      return;
    }

    setInfo(information);
  };

  /* 정상 버튼 클릭의 이벤트 핸들러를 정의해주세요. */
  const handleLoadNormal = () => {
    setIsLoading(true);
    setInfo(undefined);
    setErr(undefined);
    getInformation(loadDataCallback, true);
  };

  /* 에러 버튼 클릭의 이벤트 핸들러를 정의해주세요. */
  const handleLoadError = () => {
    setIsLoading(true);
    setInfo(undefined);
    setErr(undefined);
    getInformation(loadDataCallback, false);
  };

  return (
    <div className="userinfo">
      <div className="userinfo-title">
        {isLoading ? "Loading..." : !info && !err ? "UserInfo" : null}
        {info ? (
          <React.Fragment>
            <div>
              id: <span>{info.id}</span>
            </div>
            <div>
              password: <span>{info.password}</span>
            </div>
          </React.Fragment>
        ) : null}
        {err ? err : null}
      </div>
      <div className="userinfo-button">
        <button onClick={handleLoadNormal}>불러오기(정상)</button>
        <button onClick={handleLoadError}>불러오기(에러)</button>
      </div>
    </div>
  );
}
