function solution(n) { // 자연수 n의 각 자릿수 값 더하기
    var answer = 0;

    var m = String(n); // n을 문자열로 바꾸기
    
    for (var i = 0; i < m.length; i++) { 
        answer += parseInt(m[i]); // 각 자리수를 더해라
    }
    return answer;
}