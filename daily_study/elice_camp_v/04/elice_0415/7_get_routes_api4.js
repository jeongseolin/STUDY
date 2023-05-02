const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.get("/", async (req, res) => {
  const search_major = req.query.major;

  const student = await Student.find({ major: search_major });
  
  res.json(student);
});


module.exports = router;