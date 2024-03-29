const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncHandler(async (req, res) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const page = Number(req.query.page || 1); // url 쿼리에서 page 받기, 기본값 1
  const perPage = Number(req.query.perPage || 10); // url 쿼리에서 perPage 받기, 기본값 10
  
  // const total = await Post.countDoocuments({}); // 전체 게시글 수 쿼리하기
  // const posts = await Post.find({})
  // sort, skip, limit 사용하기
  //  .sort({ createdAt: -1 })
  //  .skip(perPage * (page - 1))
  //  .limit(perPage);
  // total, posts 를 Promise.all 을 사용해 동시에 호출하기
  const [total, posts] = await Promise.all([
      Post.countDocuments({}),
      Post.find({})
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
  ])

  const totalPage = Math.ceil(total / perPage);
  
  res.render('post/list', { posts, page, perPage, totalPage });
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
    throw new Error('제목과 내용을 입력 해 주세요');
  }

  const post = await Post.create({ title, content });
  res.redirect(`/posts/${post.shortId}`);
}));

router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  if (!title || !content) {
    throw new Error('제목과 내용을 입력 해 주세요');
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