// index.js
const express = require('express');

const noteRouter = require('./routes/notes');
const authorRouter = require('./routes/authors');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/notes', noteRouter);

app.use('/authors', authorRouter);

app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result: 'fail',
        error: err.message,
    });
});

app.use((req, res, next) => {
    res.status(404);
    res.json({
        result: 'fail',
        error: `Page not found ${req.path}`,
    });
});

app.listen(8080);




// note.js
let notes = [
  {
    id: 1,
    title: '첫 메모',
    content: '애니가 작성한 첫 메모입니다.',
    author: 'annie',
  },
  {
    id: 2,
    title: '두 번째는 밥이 작성했습니다.',
    content: '안녕하세요 밥입니다.',
    author: 'bob',
  },
  {
    id: 3,
    title: '밥이 한번 더 썼습니다.',
    content: '밥이 작성한 두 번째 메모입니다.',
    author: 'bob',
  },
  {
    id: 4,
    title: '크리스도 메모를 작성했습니다.',
    content: '안녕하세요 크리스입니다.',
    author: 'chris',
  },
];

exports.list = () => {
  return notes.map(({ id, title, author }) => ({
    id,
    title,
    author,
  }));
};

exports.get = id => {
  const note = notes.find(note => note.id === id);

  if (!note) {
    throw new Error('Note not found');
  }

  return note;
};

// authorList와 findByAuthor를 구현합니다.
exports.authorList = () => {
  const authors = notes.map(({ author }) => author);
  return [...new Set(authors)];
};

exports.findByAuthor = author => {
  const filtered = notes.filter(note => note.author === author);

  if (filtered.length < 1) {
    throw new Error(`${author} has no note`);
  }

  return filtered;
};





// notes.js
const { Router }  = require('express');
const Note = require('../models/note');

const router = Router();

router.get('/', (req, res, next) => {
    const notes = Note.list();
    res.json(notes);
});

router.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const note = Note.get(id);
        res.json(note);
    } catch(e) {
        next(e);
    }
});

module.exports = router;





// authors.js
const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

// // 작성자 목록 API("/")와 특정 작성자의 메모 출력 API("/:author/notes")를 구현합니다.
router.get('/', (req, res, next) => {
  const notes = Note.authorList();
  res.json(notes);
});

router.get('/:author/notes', (req, res, next) => {
    try {
        const notes = Note.findByAuthor(req.params.author);
        res.json(notes);
    } catch (e) {
        next(e);
    }
    
})

module.exports = router;