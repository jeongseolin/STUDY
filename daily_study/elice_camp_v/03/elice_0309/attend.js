/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

const target = document.getElementsByClassName('attend')[0]; // [0] 값 1개만 가져온다.
const inputName = document.getElementsByTagName('input')[0]; 
const attendee = document.getElementById('attendee'); 

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  /*여기에 작성해주세요.*/
  attendee.textContent = inputName.value;
}

target.addEventListener('click', attend);
