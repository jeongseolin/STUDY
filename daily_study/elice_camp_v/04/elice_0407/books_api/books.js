// Router를 이용해 books에 대한 요청을 처리하는 API를 라우팅하세요.
const { Router } = require('express');
const Book = require('../models/book');

const router = Router();

// "/" 경로에서 전체 책 리스트를 json 형태로 보내는 함수를 작성하세요.
router.get('/', (req, res) => {
  const books = Book.list();
  res.json(books);
});

// "/:id" 경로에서 입력된 id에 해당하는 책 정보를 json 형태로 내보내는 함수를 작성하세요.
// 데이터에 들어있는 id는 숫자형태임에 주의하세요.
// 입력된 id에 해당하는 책이 없는 경우 발생하는 에러를 try ~ catch로 처리할 수 있도록 합니다.
router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const book = Book.get(id);
    res.json(book);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
