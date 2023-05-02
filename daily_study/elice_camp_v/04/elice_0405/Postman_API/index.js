const express = require('express');
// 완성된 auth 미들웨어를 “/notes” 경로에만 사용하도록 연결합니다.
const auth = require('./middlewares/auth');
const noteRouter = require('./routes/notes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/notes', auth, noteRouter); // auth 추가

app.use((req, res, next) => {
    res.status(404);
    res.json({
        result: 'fail',
        error: `Page not found ${req.path}`,
    });
});

app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});

app.listen(8080);

