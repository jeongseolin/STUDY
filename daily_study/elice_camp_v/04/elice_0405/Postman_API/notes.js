const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

router.get('/', (req, res, next) => {
  // 쿼리를 확인하는 기능을 넣으세요.
  // search 라는 쿼리 파라미터가 전달되었을 경우, 메모 검색 기능이 동작하도록 합니다.
  const { search } = req.query;
  if (search) {
    const notes = Note.search(search);
    res.json(notes);
    return;
  }
  const notes = Note.list();
  res.json(notes);
});

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const note = Note.get(id);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;
  // req.get(“author”) 를 이용하여 헤더에서 값을 받아, 각 함수에 전달할 수 있도록 라우터의 request handler 들을 수정합니다.
  const author = req.get('author');
  const note = Note.create(title, content, author);
  res.json(note);
});

router.put('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const author = req.get('author');
  try {
    const note = Note.update(id, title, content, author);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id);

  const author = req.get('author');
  try {
    Note.delete(id, author);
    res.json({
      result: 'success',
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
