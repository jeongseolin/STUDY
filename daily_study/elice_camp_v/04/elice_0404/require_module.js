const module1 = require('./module1.js'); // .js 생략가능
const module2 = require('./module2/index.js'); // index.js 생략가능
const data = require('./data.json'); // .json 생략가능
const funcModule = require('./funcModule.js');

console.log(
    module1,
    module2,
    data.name,
    /* funcModule 사용 */
    funcModule(),
);

const module1 = require('./module1');
const module2 = require('./module2');
const data = require('./data');
const funcModule = require('./funcModule');

console.log(
    module1,
    module2,
    data.name,
    /* funcModule 사용 */
    funcModule(),
);