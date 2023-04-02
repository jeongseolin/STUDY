// Generic을 적용해 함수를 수정하세요.
function getFirstElement<T>(elements: T[]): T {
  return elements[0];
}

// 수정한 함수에 맞게 출력해보세요.
console.log(getFirstElement<number>([1, 2, 3])); //<number>
console.log(getFirstElement<string>(["one", "two", "three"]).substring(0, 1)); //<string> 각각 넣어줘야 함.
// console.log(getFirstElement([1, 2, 3]).substring(0, 1)); // 런타임 단계에서 에러 발생

// 채점을 위한 코드입니다. 수정하지 마세요.
export { getFirstElement };
