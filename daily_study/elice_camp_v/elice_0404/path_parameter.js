const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

// path parameter 사용하기
app.get('/say/:greeting', (req, res) => { // :greeting -> greeting 변수처럼 사용하겠다.
    const { greeting } = req.params;
    res.send(greeting);
});

app.listen(8080);