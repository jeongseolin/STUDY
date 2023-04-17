// Router를 이용해 author에 대한 요청을 처리하는 API를 라우팅하세요.
const express = require('express');
const Book = require('../models/book');

const router = express.Router();

// "/" 경로에서 전체 작가 리스트를 json 형태로 보내는 함수를 작성하세요.
router.get('/', async(req,res) => {
    const authors = await Book.getAuthors();
    res.json(authors);
});

// "/:author/books" 경로에서 파라미터로 전달된 작가의 책 리스트를 json 형태로 보내는 함수를 작성하세요.
// 입력된 작가가 데이터에 없는 경우 try ~ catch 예외 처리를 해주어야 하며, index.js에서 해당 에러를 처리하고 있습니다.
// 따라서 예외 발생 시 정상적으로 미들웨어가 동작하도록 만들어주세요.
router.get('/:author/books', async(req,res,next) => {
    try {
        const authorName = req.params.author;
        const books = await Book.getBooksByAuthor(authorName);
        res.json(books);
    } catch(err) {
        next(err);
    }
});

module.exports = router;
