/*
3. 기존의 행보다 1만큼 짧아진 행을 생성하고 color()함수로 대체된 문자열을 반환하세요.
*/

function triangle(row) { 
  while (row.length > 1) { //입력 문자열 row의 길이가 1이 될 때까지 다음과 같은 과정을 반복
    let tempStr = "";
    for (let i = 0; i <= row.length; i++) {
      tempStr += color(row[i], row[i + 1]); //첫번째, 두번째 배열을 color()함수에 전달한다.
    }
    row = tempStr;
  }
  return row;
}

/*
  1. input String(row)의 조건을 충족하는지 확인하세요.
  조건: 입력 문자열에는 대문자 ‘B’, ‘G’ 또는 ‘R’만 포함되어야 한다.
  2. 지시사항의 규칙데로 두 쌍의 색을 비교해서 새로운 색상을 반환하는 코드를 작성합니다.
  */

function color(c1, c2) { 
  const colors = ["B", "G", "R"];
  if (c1 === c2) { //c1과 c2가 같으면 그대로 반환하고,
    return c1;
  } else { //다르면 다음과 같은 과정을 수행
    return colors.filter((c) => c !== c1 && c !== c2)[0]; //c1과 c2가 아닌 다른 하나를 반환해라.
  }
}

console.log(triangle("RBRGB"));

module.exports = { triangle };
