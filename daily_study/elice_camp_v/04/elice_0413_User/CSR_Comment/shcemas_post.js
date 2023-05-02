const { Schema } = require('mongoose');
const shortId = require('./types/short-id');
const CommentSchema = require('./comment');

const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  // comments 필드 선언
  // sub-schema를 사용해 CommentSchema의 배열로 선언합니다.
  comments: [CommentSchema],
}, {
  timestamps: true,
});

module.exports = PostSchema;