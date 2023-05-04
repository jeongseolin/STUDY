// Comment.js
import React from 'react';
import '../index.css';

function Comment({ text }) {
  return (
    <div className="comment">
      <h2> 코멘트 </h2>
      <div>위 사용자의 커멘트: {text}</div>
    </div>
  );
}

export { Comment };

// UserInfo.js
import React from 'react';
import '../index.css';

function UserInfo(props) {
  return (
    <div className="user-info">
      <h2> 사용자 정보 </h2>
      <div>사용자의 이름은 {props.user.name}입니다.</div>
      <div>사용자의 나이는 {props.user.age}입니다.</div>
      <br />
    </div>
  );
}

export { UserInfo };

// Profile.js
import React from 'react';

// Comment 컴포넌트 import
import { Comment } from './Comment';

// UserInfo 컴포넌트 import
import { UserInfo } from './UserInfo';

import '../index.css';

function Profile() {
  const user1 = {
    name: '엘리스 토끼',
    age: '12',
  };
  const text1 = 'React는 재밌다!!';

  return (
    <div className="profile">
      // Comment 컴포넌트를 삽입하며, text props로 text1 를 전달함.
      <Comment text={text1} />
      // UserInfo 컴포넌트를 삽입하며, user props로 user1 를 전달함.
      <UserInfo user={user1} />
    </div>
  );
}

export { Profile };

// App.js
import React from 'react';
// Profile 함수 import
import { Profile } from './components/Profile';

function App() {
  const title = '사용자 프로파일';
  return (
    <div>
      <h1>{title}</h1>
      // Profile 함수 컴포넌트 삽입
      <Profile />
    </div>
  );
}

export default App;
