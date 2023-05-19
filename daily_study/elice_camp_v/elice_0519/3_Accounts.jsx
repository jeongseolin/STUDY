
import React, { useRef } from "react";
import "./Accounts.css";
import User from "./User";
/* 필요한 모듈을 추가로 import 해주세요. */
import { ACTIONS, usersSelector } from "../Container/AccountsContainer";
import { useSelector, useDispatch } from "react-redux";

export default function Accounts() {
  const idRef = useRef(undefined);
  const pwdRef = useRef(undefined);
  /* react-redux의 Hook을 사용해 dispatch 객체를 생성하고 state를 가져오세요. */
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    /* 지시사항에 따라 action을 생성하고 dispatch 후 입력값들을 초기화하세요. */
    const already = users.find((item) => item.id === idRef.current.value);

    if (already === undefined) {
      dispatch(ACTIONS.registerUser(idRef.current.value, pwdRef.current.value));
    }

    idRef.current.value = pwdRef.current.value = "";
  };

  return (
    <div className="accounts">
      <div className="accounts-header">Accounts</div>
      <div className="accounts-content">
        <div className="accounts-content-id">
          <label htmlFor="id">ID</label>
          <input autoComplete="off" ref={idRef} id="id" placeholder="ID" />
        </div>
        <div className="accounts-content-pwd">
          <label htmlFor="pwd">PassWord</label>
          <input
            autoComplete="off"
            ref={pwdRef}
            id="pwd"
            placeholder="PassWord"
          />
        </div>
        <button onClick={handleClick}>Register</button>
      </div>
      <div className="accounts-footer">
        {users.map((item) => (
          <User key={item.key} id={item.id} pwd={item.password} />
        ))}
      </div>
    </div>
  );
}