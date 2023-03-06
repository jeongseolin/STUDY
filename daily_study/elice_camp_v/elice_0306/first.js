// 프로퍼티와 메서드 - 문자열
var elice = "Elice Coderland";
document.write(elice.length); // 변수의 길이를 확인
document.write(elice.charAt(7)); // 7번째 데이터를 확인
document.write(elice.split(" ")); // 공백" "을 기준으로 문자열을 나눕니다.

// 프로퍼티와 메서드 - Math
var a = Math.abs(-7); // -7의 절댓값
var b = Math.ceil(0.45); // 0.45의 올림 값
var c = Math.floor(8.98); // 8.98의 내림 값
var d = Math.random(); // 0과 1 사이의 임의의 숫자 출력
document.write(a,b,c,d);

// 함수 만들고 호출하기
function add(x,y) {
  return x+y;
}
document.write(add(2,2));
document.write('<br>');
document.write('Hello Elice');

// 각 매개변수 문자열의 길이의 합
function addStringLength(inputA, inputB) {
  result = inputA.length + inputB.length; 
  return result;
};

// 각 문자열이 숫자만큼 반복되어 만들어진 새로운 문자열
function repeatString(inputA, inputB) {
  for (var i=0; i = inputB; i++ ) {
      if (i = inputB) {
          result = inputA.repeat(i); 
          return result;
      }
  }
};

// 입력된 문자열에서 빈 칸(띄어쓰기)을 없앤 문자열
function removeBlank(inputA) {
  result = inputA.replace(/ /gi, "");
  return result;
}

// 문자열들이 알파벳 순서대로 나열된 배열 (기본 default값)
function sortStringArray(inputA) {
  result = inputA.sort();
  return result;
}

// 문자열들이 알파벳 순서 반대대로 나열된 배열 (내림차순)
function reverseStringArray(inputA) {  
  result = inputA.sort((a, b) => a > b ? -1 : 1); // 오름차순 : sort((a, b) => a > b ? 1 : -1);
  return result;
}

// 소수의 합 구하기
var sum = 0;
var j;
for (var i = 1; i <= 200; i++) {
    for (j = 2; j <= i; j++) {
        if (i % j ==0) break;
    }
    if (j == i) sum += j;
}
document.write("1이상 200이하의 소수의 합 = "+ sum);

// 문자열 거꾸로 출력하기
function reverse(str) {
  var reverStr = "";
  for (var i = str.length-1; i >= 0; i--) {
       reverStr += str.charAt(i);
  }
  return reverStr;
}
document.write(reverse("Nice to meet you"));

// 숫자들 중 짝수만 골라진 배열
function getOnlyEvenNumber (inputA) {
  return inputA.filter(n => n % 2 == 0);
}

// 숫자들 중 홀수만 골라진 배열
function getOnlyOddNumber (inputA) {
  return inputA.filter(n => n % 2 !== 0);
}

// 해당 숫자의 각 자릿수로 이루어진 배열
function getDigits (inputA) {
  n = inputA.toString()
  var answer = [];
  for (i = n.length-1; i >= 0; i--) {
      answer.unshift(parseInt(n[i]))
  }
  return answer;
}

// 성인만 골라내는 함수 만들기
function getOnlyAdults(inputA) {
  let arr = [];
  for (let i = 0; i < inputA.length; i++) {
    if (inputA[i].age >= 20) {
      arr.push(inputA[i].name);
    }
  }
  return arr;
}