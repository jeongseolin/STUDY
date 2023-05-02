const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // 2. 지시사항과 실행결과를 참고하여 User Schema를 정의하세요.
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now()
  }
});

// 3. model로 이 userSchema를 다른 파일에서 사용할 수 있게 User model을 exports하세요.
module.exports = mongoose.model('User', userSchema);