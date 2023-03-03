function solution(arr) { // 배열의 평균값 구하기
    var answer = 0;
    
    for (var i = 0; i < arr.length; i++) {
    answer += arr[i];   // 각 배열들을 더하기
  }
    answer = answer/arr.length; // 더한 값에 총 배열의 수만큼 나누기
    return answer;
}

console.log(solution([1234,3456]));
