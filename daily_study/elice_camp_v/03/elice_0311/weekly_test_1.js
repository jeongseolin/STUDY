// 엘리스 2주차 모의테스트

// 1. 여러 개의 script

let var1 = 'come';
let var2 = 'Ha';
let var3 = 11;
let var4 = {name: 'Elice'};
let var5 = 'Good Job!';

// 2. 문자열 반복하기

function getDouble(str) {
    let str2 = str.toString();
    let answer = '';
    return answer = str2.repeat(2);
}

// 3. 피라미드 만들기

function pyramid (count) {
    for(var i = 0; i <= count; i++){
        for(var j = count; j > i; j--){
            document.write('&nbsp');
        }
        for(var k = 0; k < i * 2 - 1; k++){
            document.write('*');
        }
        document.write('<br>');
    }
}

// 4. 수도 퀴즈

var country = {
  대한민국: "서울",
  베트남: "하노이",
  브라질: "브라질리아",
  프랑스: "파리",
  미국: "워싱턴",
  칠레: "산티아고",
  체코: "프라하",
  러시아: "모스크바",
  중국: "베이징",
  스페인: "마드리드",
  이집트: "카이로",
  영국: "런던",
};

// 지시사항을 참고하여 코드를 작성하세요.
let chile = Object.values(country)[Object.keys(country).length-7]; //칠레의 수도
country['벨기에'] = '브뤼셀'; //추가
delete country['중국']; //삭제

// 값을 확인하기 위한 코드입니다.
console.log(chile); //산티아고
console.log(country);

// 5. 토끼, 고양이, 새
// 동물이 있는 버튼을 클릭시 텍스트의 배경색이 변하도록 설정하시오.

/* 지시사항 1번을 참고하여 코드를 작성하세요. */
/* 지시사항 1번을 참고하여 코드를 작성하세요. */
const rabbitBtn = document.getElementById('btnRabbit');
const catBtn = document.getElementById('btnCat');
const birdBtn = document.getElementById('btnBird');


rabbitBtn.addEventListener('click', function () {
    const h1tag = document.getElementById('animal');
    h1tag.setAttribute("style", "background-color:pink;");
});
catBtn.addEventListener('click', function () {
    const h1tag = document.getElementById('animal');
    h1tag.setAttribute("style", "background-color:purple;");
});
birdBtn.addEventListener('click', function () {
    const h1tag = document.getElementById('animal');
    h1tag.setAttribute("style", "background-color:orange;");
});



