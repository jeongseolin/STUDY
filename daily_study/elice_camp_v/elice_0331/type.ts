// number 타입으로 지정한 array 변수 a를 선언하고 [1, 2, 3]을 저장하세요.
let a: Array<number> = [1,2,3];

// boolean 타입의 isCamelCase 변수를 정의하고 값을 true로 저장하세요.
let isCamelCase: boolean = true;

// 첫번째 요소의 타입으로 string을, 두번째 요소의 타입으로 number를 가지는 tuple b를 선언하세요.
let b: [string, number];


// 아래 주석을 위부터 하나씩 해제해서 선언된 것들중 에러가 발생하지 않고 출력되는 배열 b를 확인하세요.
// b = [2,3]
b = ['2',3]
//b = ['2','3']

// 채점을 위한 코드입니다. 수정하지 마세요.
export { a, isCamelCase,  b };
