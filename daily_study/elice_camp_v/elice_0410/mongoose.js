// index.js
const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
// PostSchema 로드하기

exports.Post = mongoose.model('Post', PostSchema)// PostSchema로 모델 만들기



// post.js
const { Schema } = require('mongoose');

// PostSchema 정의하기
const PostSchema = new Schema({
  // title: string, required
  // content: string, required
  title: {
      type: String,
      required: true,
  },
  content: {
      type: String,
      required: true,
  }
}, {
  timestamps: true,
})

module.exports = PostSchema;