function add<T>(a: T, b: T): T {
  if (typeof a === "boolean") { // number랑 string에는 + 연산자 사용 가능함으로, if문으로 boolean
    return a || b;
  }
  return <any>a + <any>b; // a + b만 하면 오류가 난다. 강제로 타입변화<any>를 시켜서, 계산을 한다. 
}

console.log(add<number>(13, 15));
console.log(add<string>("hell", "o"));
console.log(add<boolean>(false, true));

// error
// console.log(add<number>(3, "5"));
