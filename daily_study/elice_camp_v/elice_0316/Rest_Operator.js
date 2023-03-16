function sumArray(sum, ...arr) {
  // arr.length는 sum을 제외한 매개변수의 개수를 의미합니다
  if (arr.length === 0) return sum;

  const [head, ...tail] = arr;

  // arr.length는 하나씩 줄어들며, 길이가 0이 되면 합을 반환합니다.
  return sumArray(sum + head, ...tail);
}
sumArray(0, 1, 2, 3, 4, 5); // 15

//지시사항 1) 모든 매개 변수의 곱을 구하는 함수를 작성하세요.
function mul(x, ...arr) {
    if (arr.length === 0) return x; // 마지막이 없을때까지 리턴을 할거다.
    const [head, ...tail] = arr; // head 3, tail 6,9,12,15

    return mul(x * head, ...tail); // 초기값에 맨 처음값을 곱하고, 나머지 애들은 2번째로 보냅니다. 이런식으로 계속 돌다보면 tail이 앞에서 부터 하나씩 빠질거다. 점점 줄다보면 결국에 arr의 길이가 0이 될거다. 그때 마지막 값을 return 하는 것
}

console.log(mul(3, 6, 9, 12, 15)); // 29160

console.log(mul(11, 13, 17, 19, 23, 29)); // 30808063

//지시사항 2) 첫 번째 매개변수를 곱한 배열을 반환하는 코드를 작성하세요.
function multiply(y, ...arr) {
    let newarr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newarr.push(y * arr[i]);
    }
    return newarr;



}

let arr = multiply(12, 6, 4, 3, 2, 1);
console.log(arr); // [ 72, 48, 36, 24, 12 ]
