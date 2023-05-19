
import React from "react";
import Accounts from "../Component/Accounts";
import { Provider } from "react-redux";
/* 필요한 모듈을 추가로 import 해주세요. */
import { createSlice, configureStore } from "@reduxjs/toolkit";

/* 초기상태입니다. 수정하지 마세요!*/
const initialState = {
  users: [],
  globalID: 0,
};

/* createSlice를 사용해 slice를 생성하세요. */
const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    register(state, action) {
      state.users = [
        ...state.users,
        {
          key: state.globalID,
          id: action.payload.id,
          password: action.payload.password,
        },
      ];
      state.globalID++;
    },
    delete(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

/* configureStore를 사용해 store를 구성하세요. */
const store = configureStore({ reducer: accountsSlice.reducer });

/* slice를 참고해 2가지 action 생성함수를 export 하세요. */
export const ACTIONS = {
  registerUser: accountsSlice.actions.register,
  deleteUser: accountsSlice.actions.delete,
};

export const usersSelector = (state) => state.users;

export default function AccountsContainer() {
  return (
    <Provider store={store}>
      <Accounts />
    </Provider>
  );
}