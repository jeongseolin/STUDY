const express = require("express");
const router = express.Router();

var Book = require("../models/book");
// 채점을 위한 데이터입니다. 수정하지 마세요.
var book = new Book({
  title: "Alice in Wonderland",
  author: "Charles Lutwidge Dodgson",
  category: "novel",
});
book.save(function (err, book) {
  if (err) return console.error(err);
  console.dir(book);
});

module.exports = router;
