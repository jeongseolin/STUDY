// 타이핑 도중에는, 0.5초마다 숫자가 1 증가함.
// 타이핑을 멈추면, 숫자가 증가하지 않음.

let isInThrottle
function increaseScoreDuringTyping() {
  if (isInThrottle) {
    return
  }
  
  isInThrottle = true
  
  // 타이머 세팅
  setTimeout(() => {
    const score = document.querySelector('#score')
    const newScore = parseInt(score.innerText) + 1
    score.innerText = newScore
    
    isInThrottle = false
  }, 500)
}

const nameElem = document.querySelector('#inputName')

nameElem.addEventListener("input", increaseScoreDuringTyping) 