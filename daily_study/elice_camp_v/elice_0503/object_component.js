// Student.js
import React from 'react';

const Student = ({ student }) => {
  const scorePass = student.score >= 80 ? 'PASS' : 'FAIL';
  return (
    <div>
      {student.name} 학생은 {student.subject} 수업을 수강중입니다. <br />
      현재 점수는{student.score}점으로 {scorePass}입니다.
    </div>
  );
};

export default Student;

// App.js
import React from 'react';
import Student from './components/Student';
import './App.css';

function App() {
    const student1 = {
        name: "김민수",
        subject: "수학",
        score: 88
    }

    const student2 = {
        name: "홍길동",
        subject: "영어",
        score: 72
    }
  return (
    <div className="App">
        <Student student={student1} />
        <Student student={student2} />
    </div>
  );
}

export default App;
