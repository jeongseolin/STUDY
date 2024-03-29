// async-handler.js
module.exports = (requestHandler) => {
  return async (req, res, next) => {
    try {
        await requestHandler(req,res);
    } catch (err) {
        next(err);
    }
  }
}




// posts.js
const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

// asyncHandler 오류처리 미들웨어로 전달하도록 구성합니다.
router.get('/', asyncHandler(async (req, res) => { 
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
}));

router.get('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ shortId });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
}));

router.post('/', asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }

    const post = await Post.create({ title, content });
    res.redirect(`/posts/${post.shortId}`);
}));

router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    await Post.updateOne({ shortId }, { title, content });
    res.redirect(`/posts/${shortId}`);
}));

router.delete('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  await Post.deleteOne({ shortId });
  res.send('OK');
}));

module.exports = router;