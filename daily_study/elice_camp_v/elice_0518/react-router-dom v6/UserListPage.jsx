import React from "react";
import { DATA } from "./DATA";
import "./UserListPage.css";
/* 필요한 모듈을 추가로 import 하세요! */
import { Link } from "react-router-dom";

/* ExRouting으로부터 userID를 전달받도록 수정하세요. */
export default function UserListPage({ userID }) {
  return (
    <div className="userlistpage">
      <div className="userlistpage-header">UserList</div>
      <div className="userlistpage-content">
        UserID:
        <span>
          {/* ExRouting으로부터 전달받은 userID를 출력하세요 */}
          {userID}
        </span>
        {DATA.map((item) => {
          return (
            <div key={item.name} className="userlistpage-content-user">
              <div className="userlistpage-content-user-name">{item.name}</div>
              <div className="userlistpage-content-user-addr">{item.addr}</div>
            </div>
          );
        })}
      </div>
      <div className="userlistpage-footer">
        {/* 지시사항에 맞춰 Link를 구현하세요. */}
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
}