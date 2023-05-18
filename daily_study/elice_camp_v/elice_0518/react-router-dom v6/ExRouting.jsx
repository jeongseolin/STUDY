import React, { useRef } from "react";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
/* 필요한 모듈을 추가로 import 하세요! */
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function ExRouting() {
  /* ref가 가지고있는 값을 각 페이지 컴포넌트에 전달하세요. */
  const userID = useRef("Elice");

  return (
    /* 해당 위치에 라우팅을 구현하세요. */
    /* react-router-dom이 v6로 업데이트 되었다는 것을 잊지 마세요! */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage userID={userID.current} />} />
        <Route path="/userlist" element={<UserListPage userID={userID.current} />} />
      </Routes>
    </BrowserRouter>
  );
}