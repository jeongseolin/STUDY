function solution(s){
    var change = s.toLowerCase(); // 모두 소문자로 변환

    var check_p = change.split("p").length; // "p"의 개수를 체크
    var check_y = change.split("y").length; // "y"의 개수를 체크
    
    return check_p == check_y ? true : false; // 각 체크된 개수를 비교해서, true/false값 도출
}