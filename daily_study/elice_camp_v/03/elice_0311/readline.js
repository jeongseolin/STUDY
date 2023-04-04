// 자바스크립트에서 콘솔을 통해 값을 입력 받기 위해서는 readline 모듈을 이용할 수 있습니다.
// 즉, 입출력을 한 줄씩 처리하는 모듈

const readline = require("redaline"); //readline 모듈 불러오기

const rl = readline.createInterface({ //인터페이스 생성하기
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (line) => { // 입출력을 처리하는 코드 작성하기
	/*입력받는 값을 처리하는 코드*/
	rl.close();
});

rl.on("close", () => {
	/*입력이 끝나고 실행할 코드*/
	process.exit();
});

// on 메서드 연결
rl.on("line", (line) => {
	/*입력받는 값을 처리하는 코드*/
	rl.close();
}).on("close", () => {
	/*입력이 끝나고 실행할 코드*/
	process.exit();
});