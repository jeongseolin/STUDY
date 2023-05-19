
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../Container/AccountsContainer";

export default function User({ id, pwd }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    /* 지시사항에 따라 action을 생성하고 dispatch하세요. */
    dispatch(ACTIONS.deleteUser({ id: id }));
  };

  return (
    <UserInfo role="userInfo" onClick={handleClick}>
      <IDPos>ID: {id}</IDPos>
      <PWDPos>PassWord: {pwd}</PWDPos>
    </UserInfo>
  );
}

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 0 0 60px;

  width: 250px;
  height: 60px;

  border: 1px solid black;

  cursor: pointer;

  & + & {
    margin: 20px 0px 0px 0px;
  }
  &:hover {
    background-color: lightgray;
  }
`;

const IDPos = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50%;
  margin: 0px 0px 0px 10px;
`;

const PWDPos = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50%;
  margin: 0px 0px 0px 10px;
`;