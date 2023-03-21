/**
1. input String(str)이 palindrome 이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
palindrome이란 앞에서부터 읽으나 뒤에서부터 읽으나 동일한 단어나 구를 뜻합니다.
palindrome 예시: refer, madam, redivider, deified, civic, radar, level, rotor, kayak
*/

function isPalindrome(str) {
  let lowstr = str.toLowerCase().replace(/[\W_]/g,''); // 소문자변경, 특수문자제거
  let reversestr = lowstr.split('').reverse().join('');  // 빈 문자열 ''을 구분자로 사용하여 배열로 변환, 배열을 뒤집는다, 뒤집은 배열을 다시 문자열로 합칩니다
  return lowstr == reversestr;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));


/**
2. input String(str)으로 들어온 문자열이 isogram이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
isogram은 문자의 반복없이 구성된 단어나 문장을 가르킵니다.
*/

function isIsogram(str) {
  str = str.toLowerCase().split('').sort(); // 소문자변경, ''구분자로 배열로변환, 오름차순 정렬
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  } return true;
};

module.exports = { isPalindrome, isIsogram };
