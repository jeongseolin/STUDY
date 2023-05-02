// models/schema/cosmetic.js
// 지시사항을 참고하여 코드를 완성하세요.
const { Schema } = require("mongoose");

const CosmeticSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

module.exports = CosmeticSchema;