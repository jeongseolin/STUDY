// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0; 
var input = [];
var start = '';

rl.on("line", function(x) {
  count += 1;
  input.push(x); // input 배열에 집어 넣어라.
  var n = parseInt(input[0]); // 첫번째 배열 값을 숫자로 변환하고, N에 저장
  
  if(count === n + 1) { // count가 n값보다 커지면 그만둬라.
    rl.close(); 
  }
}).on('close', function() {
  for(var i = 1; i < input.length; i++) {
    start += input[i]; // 각 i의 자리의 값을 start에 저장
  }
  console.log(start);
  process.exit();
});