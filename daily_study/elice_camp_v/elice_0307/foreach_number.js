// 연속연산기

function solution(data) {
  const arr = data.split(' ');
  let a = Number(arr[0]);
  const b = Number(arr[1]);
  const operators = arr[2].split('');
  // 0으로 값을 할당하지 않으면 NaN(Not a number)이 뜸
  let sum = 0;

  // 또는 operators.map을 사용할 수도 있음, for문도 가능
  // 그럼 map, forEach, for를 사용할 때 차이는?
  // 1. map - 배열의 각 요소에 대해 콜백함수를 실행하고 실행결과를 모은 새 배열을 리턴한다.
  // 2. forEach - 배열의 각 요소에 대해 콜백함수를 실행한다. 중간에 break 사용 불가
  // 3. for - 배열의 초기값부터 증가 또는 감수하면서 조건에 따라 순회한다. (for ([초기값][조건][증감여부])), break 사용 가능
  operators.forEach((op) => {
    if (op === '+') a += b;
    else if (op === '-') a -= b;
    else if (op === '*') a *= b;
    else if (op === '/') a = Math.floor(a / b);

    sum += a;
  });

  // return `${a} ${sum}`;
  return [a, sum].join(' ');
}

// 다른 방법
function solution(data) {
  let list = data.split(' ');
  let A = Number(list[0]);
  let B = Number(list[1]);
  let C = list[2];
  let sum = 0;

  for (i = 0; i < C.length; i++) {
    if (C[i] === '+') {
      A = A + B;
    }
    if (C[i] === '-') {
      A = A - B;
    }
    if (C[i] === '/') {
      A = Math.floor(A / B);
    }
    if (C[i] === '*') {
      A = A * B;
    }
    sum += A;
  }
  return [A, sum].join(' ');
}