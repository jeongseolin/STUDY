// users.js
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  // name, level 선언
  name: {
      type: String,
      required: true,
  },
  level: {
      type: Number,
      required: true,
      default: 0,
  }
}, {
  timestamps: true,
})

module.exports = UserSchema;




// index.js / models 폴더 안에 있는 index.js
const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
const UserSchema = require('./schemas/user');

exports.Post = mongoose.model('Post', PostSchema);
// User 모델 생성
exports.User = mongoose.model('User', UserSchema);




// post.js
const { Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
      type: Schema.Types.ObjectId,  // populate() 가 동작하기 위해서 설정해주는 값
      required: true,
      ref: 'User',
  }
}, {
  timestamps: true,
})

module.exports = PostSchema;






// index.js
const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect("mongodb://localhost:27017/exam_6");

async function main() {
  // Post.find()에 populate()를 추가하여 author가 주입되도록 코드를 완성합니다.
  const posts = await Post.find({}).populate('author'); // populate 사용하기
  return posts;
}

module.exports = main;