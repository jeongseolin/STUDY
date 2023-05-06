import React, { useState } from 'react';
import './App.css';

function App() {
  let [todo, setTodo] = useState([
    { id: 1, title: '꾸준히 운동하기' },
    { id: 2, title: '영어 공부하기' },
    { id: 3, title: '미니 프로젝트 진행하기' },
  ]);

  //todoList를 정의합니다.
  const todoList = todo.map((todo) => <li key={todo.id}>{todo.title}</li>);

  return (
    <div>
      <h2>신년 목표</h2>
      <ul>
        {/* todoList를 출력합니다. */}
        {todoList}
      </ul>
    </div>
  );
}

export default App;
