// 지시사항에 따라 코드를 작성합니다.

// 삼각형 일까요?

function isTriangle(a, b, c) {
  if (a >= b+c || b >= a+c || c >= a + b) return false;
  return true;
}