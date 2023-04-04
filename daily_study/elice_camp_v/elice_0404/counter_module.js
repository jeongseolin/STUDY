let count = 0;

module.exports = () => { return count += 1; } // 함수형으로 작성해야 함.

// index.js
const counter = require('./counter');

for (let i = 0; i < 10; i++) {
    console.log(counter()); // 함수호출을 해줘야함.
}