// index.js
const mongoose = require('mongoose');
const { Post } = require('./models');
// 몽고디비 연결
mongoose.connect("mongodb://localhost:27017/exam_5");

async function main() {
  const posts = await Post.find({
    // 쿼리 작성하기
    // 작성자는 "andy", "bob", "kate" 중에 한 명입니다.
    // 좋아요("likes") 수는 5개보다 크고, 10개보다 작거나 같습니다.
    // 게시글 분류("category")는 없거나 "notice" 입니다.
    author: ['andy', 'bob', 'kate'],
    likes: {
        $gt: 5,
        $lte: 10,
    },
    $or: [
        { category: { $exists: false} },
        { category: 'notice' },
    ]

  });
  return posts;
}

main()
  .then((posts) => {
    console.log("---검색 결과---");
    console.log(posts);
    console.log("---------------");
    return;
  })
  .catch(err => {
    console.error('에러가 발생했습니다.', err)
    return;
  })
  .finally(() => {
    process.exit();
  });





  // post.js
  const { Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  category: String
}, {
  timestamps: true,
});

module.exports = PostSchema;