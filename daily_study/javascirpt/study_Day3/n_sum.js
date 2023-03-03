function solution(n) { // n의 약수의 합 구하기
    var answer = 0;
    
    for (var i=0; i <= n; i++) { 
        if (n % i == 0) {
            answer += i;
        }
    }

    return answer;
}