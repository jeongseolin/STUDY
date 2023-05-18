
import React, { useState, useRef } from "react";
import { USERS } from "./UserData";
import "./UserInfo.css";

export default function UserInfo() {
  const [user, setUser] = useState({});
  /* USERS 배열의 인덱스를 저장하는 상태값을 정의해주세요. */
  const idx = useRef(-1);

  const handleClick = () => {
    /* 
      아래의 내용에 맞춰 handleClick 이벤트 핸들러를 정의해주세요.
        1. 버튼 클릭 시 마다 인덱스 값이 증가합니다. 단, USERS 배열 크기를 초과하는 경우 0으로 초기화합니다.
        2. user state를 인덱스 값이 가리키는 USERS 배열의 객체로 초기화합니다.
    */
    if (idx.current === USERS.length - 1) {
      idx.current = 0;
    } else {
      idx.current += 1;
    }
    setUser(USERS[idx.current]);
  };

  return (
    <div className="userinfo">
      <div className="userinfo-content">
        <div className="userinfo-content-name">
          === User's Name ===
          <div className="userinfo-content-div">{user ? user.name : null}</div>
        </div>
        <div className="userinfo-content-age">
          === User's Age ===
          <div className="userinfo-content-div">{user ? user.age : null}</div>
        </div>
        <div className="userinfo-content-addr">
          === User's Address ===
          <div className="userinfo-content-div">{user ? user.addr : null}</div>
        </div>
      </div>
      <div className="userinfo-footer">
        <button className="userinfo-footer-btn" onClick={handleClick}>
          NEXT
        </button>
      </div>
    </div>
  );
}