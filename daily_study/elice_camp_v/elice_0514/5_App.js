import React, { useState } from 'react';
import axios from 'axios';

function Cafes() {
  const [cafe, setCafe] = useState([]);
  const [saveId, setSaveId] = useState('');
  const [saveItem, setSaveItem] = useState('');

  async function fetchCafe() {
    const response = await axios.get(
      `https://${window.location.hostname}:8190/data`
    );
    setCafe(response.data);
  }

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `https://${window.location.hostname}:8190/data`,
        {
          id: saveId,
          item: saveItem,
        }
      );

      setCafe([...cafe, response.data]);
    } catch (error) {
      console.error(error);
      alert('메뉴 등록에 실패했습니다.');
    }
  };

  const menuName = cafe.map((menu) => <li key={menu.id}> {menu.item} </li>);

  return (
    <>
      <h4>카페 메뉴</h4>
      <div> {menuName} </div>
      <button id="load" onClick={fetchCafe}>
        불러오기
      </button>
      <br />
      <label htmlFor="save_id">ID:</label>
      <input
        type="text"
        id="save_id"
        value={saveId}
        onChange={(e) => setSaveId(e.target.value)}
      />
      <br />
      <label htmlFor="save_item">카페 메뉴:</label>
      <input
        type="text"
        id="save_item"
        value={saveItem}
        onChange={(e) => setSaveItem(e.target.value)}
      />
      <br />
      <button id="save" onClick={handleSave}>
        등록하기
      </button>
      <br />
      <br />
      {cafe.length > 0 ? (
        <div id="success">
          {cafe[cafe.length - 1].item}이(가) 등록되었습니다.
        </div>
      ) : null}
      <div id="fail"></div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Cafes />
    </div>
  );
}

export default App;
