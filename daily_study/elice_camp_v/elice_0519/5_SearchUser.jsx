
import React, { useRef } from "react";
import "./SearchUser.css";
import Info from "./Info";
import {
  dataSelector,
  errorSelector,
  loadingSelector,
  getUserByName,
} from "../Container/SearchUserContainer";
import { useDispatch, useSelector } from "react-redux";

export default function SearchUser() {
  const inputRef = useRef();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    /* thunk action creator를 dispatch하고 입력값을 초기화해주세요. */
    dispatch(getUserByName(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div className="searchuser">
      <div className="searchuser-header">SearchUser</div>
      <div className="searchuser-content">
        {loading ? "Loading..." : null}
        {data ? <Info data={data} /> : null}
        {error ? error : null}
      </div>
      <div className="searchuser-footer">
        <input
          autoComplete="off"
          type="text"
          placeholder="user's name"
          ref={inputRef}
        />
        <button onClick={handleClick}>search</button>
      </div>
    </div>
  );
}