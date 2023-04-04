//제시된 데이터
var data = {
  items: [
    {
      name: "user1",
      group: 1,
    },
    {
      name: "user2",
      group: 1,
    },
    {
      name: "user3",
      group: 2,
    },
  ],
};

//위에 제시된 데이터 배열을 지시사항에 따라 div 목록으로 렌더링합니다.
  const btn1El = document.getElementsByClassName("btn btn1")[0];
  const btn2El = document.getElementsByClassName("btn btn2")[0];
  const btn3El = document.getElementsByClassName("btn btn3")[0];

  btn1El.addEventListener("click", activateItem);
  btn2El.addEventListener("click", activateItem);
  btn3El.addEventListener("click", activateItem);

  function activateItem(e) {
      e.preventDefault();
      
      if (e.target === btn1El) {
             alert(`Hi, ${data.items[0].name}! You are in group ${data.items[0].group}`);
      } else if (e.target === btn2El) {
            alert(`Hi, ${data.items[1].name}! You are in group ${data.items[1].group}`);
      } else if (e.target === btn3El) {
             alert(`Hi, ${data.items[2].name}! You are in group ${data.items[2].group}`);
      }
  }