
import React from "react";
import * as API from "../Service/API";
import SearchUser from "../Component/SearchUser";
import { Provider } from "react-redux";
/* 필요한 모듈을 추가로 import 해주세요. */
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

/* 초기 상태값입니다. 수정하지 마세요! */
const initialState = {
  loading: false,
  error: "",
  data: undefined,
};

/* createAsyncThunk를 사용해 thunk action creator를 생성하세요. */
export const getUserByName = createAsyncThunk(
  "search/getUserByName",
  async (name) => {
    const response = await API.getByName(name);
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  /* thunk action creator로 만들어진 추가 action들을 처리하기 위해 reducer를 작성해주세요. */
  extraReducers: (builder) => {
    builder.addCase(getUserByName.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.data = undefined;
    });

    builder.addCase(getUserByName.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = "";
    });

    builder.addCase(getUserByName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = undefined;
    });
  },
});

export const loadingSelector = (state) => state.loading;
export const errorSelector = (state) => state.error;
export const dataSelector = (state) => state.data;

const store = configureStore({ reducer: searchSlice.reducer });

export default function SearchUserContainer() {
  return (
    <Provider store={store}>
      <SearchUser />
    </Provider>
  );
}