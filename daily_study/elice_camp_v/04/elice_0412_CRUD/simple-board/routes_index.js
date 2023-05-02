const { Router } = require('express');

const router = Router();

// 첫 페이지에 접근할 경우 /post 페이지로 redirect 하도록 수정합니다. 
router.get('/', (req, res) => {
  // res.render('index');
  res.redirect('/posts');
});

module.exports = router;