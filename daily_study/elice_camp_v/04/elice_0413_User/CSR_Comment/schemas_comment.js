const { Schema } = require('mongoose');

const CommentSchema = new Schema({
  // content, String, required,
  content: {
      type: String,
      required: true,
  },
  // author, User, required
  author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
  }
}, {
  timestamps: true,
});

module.exports = CommentSchema;