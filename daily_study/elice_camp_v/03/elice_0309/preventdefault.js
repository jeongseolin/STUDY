// 지시사항을 참고하여 코드를 작성하세요.
var form1 = document.getElementById('form');
var input1 = document.getElementById('input');
var answer1 = document.getElementById('answer');

form1.addEventListener('click', function(e){
    e.preventDefault();
    answer1.textContent = input1.value;
});