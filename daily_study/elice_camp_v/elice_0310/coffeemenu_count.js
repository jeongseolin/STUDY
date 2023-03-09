// 각 function마다 getElementById()와 getElementsByTagName()을 사용해서 index.html <body>내 각 div id에 해당하는 <p> 태그의 개수를 출력하세요.

function getAllParaElems() {
  var allmenu = document.getElementsByTagName('p');
var num = allmenu.length;
alert("전체 메뉴 종류는 " + num + " 개 입니다.");
}

function div1ParaElems() {
  var coffee1 = document.getElementById('coldbrew');
  var coffee2 = coffee1.getElementsByTagName('p');
var num = coffee2.length;
alert("커피 음료 종류는 " + num + " 개 입니다.");
}

function div2ParaElems() {
  var espresso1 = document.getElementById('espresso');
  var espresso2 = espresso1.getElementsByTagName('p');
var num = espresso2.length;
alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
}
