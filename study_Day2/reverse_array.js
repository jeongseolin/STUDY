function solution(n) {
    var arr = n.toString(); // 자연수n을 문자열로
    // var arr = n + "";
    var answer = [];

    for(var i = arr.length-1; i >= 0; i--){  // 거꾸로 배열하라고 했으니까
        answer.push(Number(arr[i])); 
    }
    return answer;
}