// 함수(1개 혹은 여러개)를 자유롭게 구현해 부세요.
export const makeAdultList = (humanList) => {
  let nameTags = ""
  let ageTags = ""
  humanList.forEach((human) => {
    if (human.age < 20) {
      return
    }
    nameTags += `<li>${human.name}</li>`
    ageTags += `<li>${human.age}살</li>`
  })
  return [nameTags, ageTags]
}

export const makeChildList = (humanList) => {
  let nameTags = ""
  let ageTags = ""
  humanList.forEach((human) => {
    if (human.age >= 20) {
      return
    }
    
    nameTags += `<li>${human.name}</li>`
    ageTags += `<li>${human.age}살</li>`
  })
  
  return [nameTags, ageTags]
}













// 아래의 배열 예시를 활용하여 실행해 보세요.
const inputExample = [{
  name: "제이슨",
  age: 12
}, 
{
  name: "캐롤린",
  age: 5
},
{
  name: "오바마",
  age: 30
},
{
  name: "토르",
  age: 40
},
{
  name: "아이언맨주니어",
  age: 12
},
{
  name: "스파이더맨",
  age: 20
},
{
  name: "알리사",
  age: 15
},
{
  name: "나타샤",
  age: 35
},
{
  name: "잭",
  age: 40
}]

// 위 배열 변수명 및 작성한 함수명을 아래에 기입해 주세요.
export { inputExample                  }
