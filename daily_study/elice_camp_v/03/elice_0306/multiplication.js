// 2단 ~ 9단 구구단 만들기

// 2단부터 9단까지 출력하는 반복문을 완성시켜 보세요.
for(var n = 2; n <= 9; n++) {
  for (var i = 1; i <= 9; i++) {
      document.write( n + ' x ' + i + ' = ' + (n*i));
      document.write('<br>');
  }
}