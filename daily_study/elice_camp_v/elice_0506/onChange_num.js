import React, { useState } from 'react';
import './App.css';

function Check(props) {
  //Check의 props를 변수에 저장합니다.
  const data = props.num;
  return (
    <div>
      {/*조건에 따라 적절한 결과값을 출력합니다.*/}
      {/*출력 태그는 <h2>태그를 이용합니다.*/}
      {parseInt(data, 10) > 0 ? ( // parseInt(숫자로 변경할 문자열, 진법)
        <h2>양수입니다.</h2>
      ) : (
        <h2>양수가 아닙니다.</h2>
      )}
    </div>
  );
}

function App() {
  let [num, setNum] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }
  return (
    <form>
      숫자를 입력하세요: <input value={num} onChange={handleChange} />
      <Check num={num} />
    </form>
  );
}

export default App;
