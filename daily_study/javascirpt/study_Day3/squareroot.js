function solution(n) { // 정수 제곱근 판별
    var answer = 0;
    
    for (var x = 1; x*x <= n; x++){
        if (x*x == n) {
          answer = (x+1)*(x+1);
        } else {
          answer = -1;
      }
    }

    return answer;
}