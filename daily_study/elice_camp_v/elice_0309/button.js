/*지시사항을 따라 작성해주세요*/
var target = document.getElementById("btn");

function changeButtonOnclick() {
  /*지시사항 1번*/
  target.classList.toggle('changeColor'); // 버튼 클릭 시 색상이 변경될 수 있도록 changeColor 클래스 추가
  /*지시사항 2번*/
  target.innerText = "버튼 클릭 성공!";
}

// innertext : 사용자한테 보여지는 텍스트. html 엘리먼트 -> 속성. 태그값만 빼고 다 가져오는, 실제로 랜더링한 요소를 가져오는
// textContent : 숨겨진 텍스트까지 가져온다. node 인터페이스 속성

/*지시사항 3번*/
  target.addEventListener("click", changeButtonOnclick); 
