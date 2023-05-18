import React, { useState } from "react";
import './HomePage.css';

export default function HomePage() {
  /* 로딩 화면 구현을 위한 상태값을 추가해주세요. */
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    /* setTimeout과 callback함수를 작성하여 handleClick을 완성해주세요. */
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 2000);
  }

  return(
    <div className="homepage">
      {/* 조건부 렌더링을 통해 출력될 문구를 정의해주세요. */}
      {isLoaded ? "HomePage" : isLoading ? "Loading..." : "Nothing"}
      <button onClick={handleClick}>
        불러오기
      </button>
    </div>
  );
}