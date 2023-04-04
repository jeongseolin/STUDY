// 타이핑 도중에는, alert가 안 일어남.
// 타이핑이 1초 이상 멈출 시, alert가 일어남.

let alertTimer
function alertWhenTypingStops() {

  if (alertTimer) {
    clearTimeout(alertTimer)
  }
  
  const name = nameElem.value
  // 타이머 시작
  alertTimer = setTimeout(() => alert(`입력된 이름: ${name}`), 1000)
}

const nameElem = document.querySelector('#inputName')

nameElem.addEventListener("input", alertWhenTypingStops) 