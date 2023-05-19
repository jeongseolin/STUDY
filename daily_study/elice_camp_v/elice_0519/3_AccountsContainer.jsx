
import React from "react";
import Accounts from "../Component/Accounts";
/* 필요한 모듈을 추가로 import 해주세요. */
import { createStore } from "redux";
import { Provider } from "react-redux";


/* 초기상태입니다. 수정하지 마세요!*/
const initialState = {
  users: [],
  globalID: 0,
};

function reducer(state, action) {
  switch (action.type) {
    /* 지시사항에 따라 계정 정보 관리를 위한 reducer를 정의해주세요. */
    case "accounts/register":
      return {
        ...state,
        users: [
          ...state.users,
          {
            key: state.globalID,
            id: action.payload.id,
            password: action.payload.password,
          },
        ],
        globalID: state.globalID + 1,
      };
    case "accounts/delete":
      return {
        ...state,
        users: state.users.filter((usr) => usr.id !== action.payload.id),
      };
    default:
      return state;
  }
}

/* 초기 상태와 정의한 reducer로 store를 구성하세요. */
const store = createStore(reducer, initialState);

const ACCOUNTS_REGISTER = "accounts/register";
const ACCOUNTS_DELETE = "accounts/delete";

export const ACTIONS = {
  /* registerUser와 deleteUser 액션 생성함수를 정의하세요. */
  registerUser: (id, pwd) => ({
    type: ACCOUNTS_REGISTER,
    payload: {
      id: id,
      password: pwd,
    },
  }),

  deleteUser: (id) => ({
    type: ACCOUNTS_DELETE,
    payload: {
      id: id,
    },
  }),
};

/* selector를 정의하여 export하세요. */
export const usersSelector = (state) => state.users;

export default function AccountsContainer() {
  /* Accounts 컴포넌트가 store에 접근할 수 있도록 코드를 추가해주세요. */
  return (
    <Provider store={store}>
      <Accounts />
    </Provider>
  );
}