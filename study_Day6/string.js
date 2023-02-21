var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    // 문자열의 개별 문자가 'l'이면
    if (string[i] !== search) continue;
    count++;
}

console.log(count);