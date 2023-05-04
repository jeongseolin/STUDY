import React from 'react';
import './App.css';

//user의 정보(이름, 프로필사진) 출력 컴포넌트
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <div>이름: {props.user.name}</div>
      <div>나이: {props.user.age}</div>
    </div>
  );
}

//코멘트 출력 컴포넌트
function Comment(props) {
  return <div className="Comment">문구: {props.text}</div>;
}

//문구 출력 컴포넌트
function Profile(props) {
  return (
    <div className="Profile">
      <UserInfo user={props.author} />
      <Comment text={props.text} />
    </div>
  );
}

//데이터 저장 변수
const comment = {
  text: 'I hope you enjoy learning React!',
  author: {
    name: '엘리스 토끼',
    age: '12',
  },
};

const element = <Profile text={comment.text} author={comment.author} />;

export default element;
