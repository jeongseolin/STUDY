// 매개변수 n이 소수라면 true를, 소수가 아니라면 false를 반환합니다.
function isPrime(n) { // isPrime(n) 함수 정의
  var divisor = 2; // 변수 divisor 선언, 초깃값은 2
  if (n == 1) return false; // 매개변수 n이 변수 divisor보다 큰 조건 하에서 while문이 작동되도록 합니다.
  while (n > divisor) {
    if (n % divisor === 0) { // 만약 n을 divisor로 나눈 값의 나머지가 0이라면 false를 반환하고, 0이 아니라면, divisor++를 수행하도록 합니다.
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

for (var i = 11; i <= 20; i++) { //11이상 20이하의 수를 isPrime()에 매개변수로 넘겨 결과를 출력하세요. i, isPrime(i)와 같은 형태로 출력합니다.
  document.writeln(i, isPrime(i));
}
