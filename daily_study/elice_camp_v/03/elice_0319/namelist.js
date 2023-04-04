// 지시사항에 따라 makeAdultNameList 함수의 코드를 작성합니다.
const makeAdultNameList = (inputA) => {
  let result = ""
  inputA.filter((age) => Number(age.age) >= 20)
        .forEach((names) => {result += `<li>${names.name}</li>`})
  return result
}

// 지시사항에 따라 makeChildNameList 함수의 코드를 작성합니다.
const makeChildNameList = (inputA) => {
  let result = ""
  inputA.filter((age) => Number(age.age) < 20)
        .forEach((names) => {result += `<li>${names.name}</li>`})
  return result
}



// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [{
  name: "박태환",
  age: 35
}, 
{
  name: "유재석",
  age: 49
},
{
  name: "김강훈",
  age: 12
},
{
  name: "최태민",
  age: 15
},
{
  name: "이바람",
  age: 52
},
{
  name: "이지원",
  age: 15
}]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
export { inputA, makeAdultNameList, makeChildNameList }
