const { Router } = require('express');
const { Post } = require('../models');
const { pickRandomWord } = require('../utils/random-word');

const router = Router();

router.get('/generate', async (req, res, next) => {
  // 랜덤한 문자열을 생성해주는 함수를 사용해서 title, content를 create 한다.
  const title = pickRandomWord(); 
  const content= pickRandomWord();
  
  try {
    const post = await Post.create({
      title,
      content,
    });
    
    res.json(post);
  } catch(err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find({});
    
    res.json(posts);
  } catch(err) {
    next(err);
  }
});

module.exports = router;