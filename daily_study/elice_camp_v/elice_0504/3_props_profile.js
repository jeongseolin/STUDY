// Profile.js
// 프로필 정보를 출력하는 컴포넌트를 완성하세요.
function Profile(props) {
  return (
    <div>
      <h2>이름: {props.name}</h2>
      <h2>나이: {props.age}</h2>
      <h2>성별: {props.gender}</h2>
    </div>
  );
}

export default Profile;


// App.js
import React from "react";
import "./App.css";
// Profile 컴포넌트를 불러오세요.
import Profile from "./Profile";

// 프로필 데이터가 저장된 변수입니다. 채점 시 해당 데이터를 그대로 제출하세요!
const data = {
  name: "Joshi",
  age: "25",
  gender: "남",
};

function App() {
  return (
    // 위에 선언된 data를 불러온 Profile 컴포넌트를 이용해 출력하세요.
    <div className="App">
      <Profile name={data.name} age={data.age} gender={data.gender} />
    </div>
  );
}

export default App;
