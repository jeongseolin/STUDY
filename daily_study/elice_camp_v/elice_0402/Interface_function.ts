// 매개변수로 객체를 받는 예제 코드입니다.
function printName(namedObj: { name: string }) {
  return namedObj.name;
}

// 어떤 결과가 나오는지 확인해보세요.
let myObj = { size: 10, name: "Saehee Choi" };
console.log(printName(myObj));

// string 타입의 프로퍼티인 name을 갖는 Interface를 정의하세요.
interface User {
    name: string;
}

// printName 함수와 동일하게 작동하는 printName2라는 함수를 생성하고, 정의된 Interface를 parameter 타입으로 지정하세요.
function printName2(namedObj2: { name: string }) {
  return namedObj2.name;
}

// 주석을 해제하여 어떤 결과가 나오는지 확인해보세요.
let myObj2 = { size: 10, name: "Elice Kim" };
console.log(printName2(myObj2));

// 채점을 위한 코드입니다. 수정하지 마세요.
export { printName2 };