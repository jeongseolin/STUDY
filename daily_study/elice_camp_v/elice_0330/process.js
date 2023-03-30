// 1. 지시사항에 나와있는 process 객체 정보를 console에 출력합니다.
console.log(process.version);       // node.js의 버전
console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)

//argv는 프로세스를 실행할때 전달되는 파라미터 정보이며 배열 객체이므로 index를 사용하면 i번째 parameter 값을 확인할 수 있습니다. 여기서 forEach()를 사용해서 argv의 모든 속성값을 하나씩 출력할 수 있습니다.

process.argv.forEach(function(val, index, array) {
    // 2. process.argv명령 행 인수를 포함하는 배열의 요소를 콘솔에 출력하세요.
    console.log(index + ': ' + val);
});
