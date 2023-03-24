// 입력 변화가 2초 뒤에 반영되는 코드를 작성해 보세요.
function showInputWorddelay() {
  setTimeout(() => {
        const name = nameElem2.value
        delayShowElem.innerHTML = name
  }, 2000)
}

const nameElem2 = document.querySelector('#inputName2')
const delayShowElem = document.querySelector('#delayShow')

nameElem2.addEventListener("input", showInputWorddelay) 



// 입력 변화가 바로 반영되는 코드는 아래와 같이 작성되어 있습니다.
// 이를 참고하여, 위에, 입력 변화가 2초 뒤에 반영되는 코드를 작성해 보세요.
function showInputWord() {
const name = nameElem1.value
instantShowElem.innerHTML = name
}

const nameElem1 = document.querySelector('#inputName1')
const instantShowElem = document.querySelector('#instantShow')

nameElem1.addEventListener("input", showInputWord) 