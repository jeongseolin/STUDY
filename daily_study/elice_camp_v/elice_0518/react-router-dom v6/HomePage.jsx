import React from "react";
import "./HomePage.css";
/* 필요한 모듈을 추가로 import 하세요! */
import { Link } from "react-router-dom";

/* ExRouting으로부터 userID를 전달받도록 수정하세요. */
export default function HomePage({ userID }) {
  return (
    <div className="homepage">
      <div className="homepage-header">HomePage</div>
      <div className="homepage-content">
        Hello
        <span>
          {/* ExRouting으로부터 전달받은 userID를 출력하세요 */}
          {userID}
        </span>
      </div>
      <div className="homepage-footer">
        {/* 지시사항에 맞춰 Link를 구현하세요. */}
        <Link to="/userlist">Userlist</Link>
      </div>
    </div>
  );
}