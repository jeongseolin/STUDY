// add 함수에 매개변수 타입을 number로, 반환하는 값도 number로 지정하세요.
function add(x: number, y: number): number {
  return x + y;
}

// 지시사항을 참고하여 id와 age를 입력 받아 문자열을 출력하는 helloUser 함수를 완성하세요.
function helloUser(id: string, age?: number){
    if (age) {
        return `Hello, ${id}. You are ${age}years old.`;
    }
    else {
        return `Hello, ${id}.`;
    }
  
}

// 채점을 위한 코드입니다. 수정하지 마세요.
export { add,  helloUser };