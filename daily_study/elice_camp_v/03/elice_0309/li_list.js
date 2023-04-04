var myUl = document.querySelector('ul');
var myLi, myText, i;

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.

for (i = 0; i <= 20; i = i + 1) {
  myLi = document.createElement('li');
  myUl.appendChild(myLi);
  myText = document.createTextNode(i + '번째 문장');
  myLi.appendChild(myText);
}


