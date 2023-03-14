// 여러 입력을 받도록 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
    rl.close();
});
 
rl.on('close', () => {
    input.forEach(el => { // 한줄로 출력
        console.log(el);
    })
    process.exit();
})

// 출력 결과
// 1
// 2
// 3
// 4