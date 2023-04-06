var express = require("express");
var Book = require("../models/book");
var router = express.Router();

// 4. 모든 book 데이터를 조회하는 라우터를 완성하세요.
router.get("/", function(req, res) {
    Book.find({}).exec(function (err, books) {
        if (err) {
            res.send(`error`);
        } else {
            res.json(books);
        }
    })
});

module.exports = router;