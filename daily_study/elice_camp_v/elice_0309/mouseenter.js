var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
function mouseon1 () {
    blockOne.classList.toggle('red');
}
function mouseon2 () {
    blockTwo.classList.toggle('yellow');
}
function mouseon3 () {
    blockThree.classList.toggle('green');
}
blockOne.addEventListener('mouseenter', mouseon1);
blockTwo.addEventListener('mouseenter', mouseon2);
blockThree.addEventListener('mouseenter', mouseon3);