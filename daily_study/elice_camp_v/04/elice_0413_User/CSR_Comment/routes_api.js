const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const { Post, User } = require('../models');

const router = Router();

router.get('/posts/:shortId/comments', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ shortId });
  
  // post.comments 의 작성자 populate 하기
  await User.populate(post.comments, { path: 'author' });
  // json 으로 응답 보내기
  res.json(post.comments);
}));

router.post('/posts/:shortId/comments', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { content } = req.body;
  const author = await User.findOne({ shortId: req.user.shortId });
  
  // $push operator 사용하여 댓글 추가하기
  await Post.updateOne({
      shortId,    
  }, {
      $push: { comments: { content, author }},
  });
  
  res.json({ result: 'success' });
}));

module.exports = router;