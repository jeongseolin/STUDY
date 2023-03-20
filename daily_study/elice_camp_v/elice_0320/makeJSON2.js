// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
function makeJsonAndAlert(e) {
  // 새로고침 방지 (form의 버튼은 default 행위가 새로고침인데, 이 default 행위를 막아야 함)
  e.preventDefault()
  
  const email = emailElem.value
  const name = nameElem.value
  const password = passwordElem.value
  
  // 객체 만들기 (변수명과 key명이 같으면, 이렇게 단축해서 써도 됨)
  // 즉, 본래 {email: email} 같은 형태인데, 이걸 단축해서 {email} 로 쓴 것임.
  const obj = {
    email,
    name,
    password
  }
  
  // JSON화
  const json = JSON.stringify(obj)
  
  // alert창 띄우기
  alert(json)
}


const emailElem = document.querySelector('#inputEmail')
const nameElem = document.querySelector('#inputName')
const passwordElem = document.querySelector('#inputPassword')
const buttonElem = document.querySelector('#buttonSubmit')

buttonElem.addEventListener("click", makeJsonAndAlert)