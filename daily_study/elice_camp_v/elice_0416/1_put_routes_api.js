const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

router.put("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const { name, age, major } = req.body;
  
  // 지시사항을 참고하여 코드를 완성하세요.
  const student = await Student.updateOne({ shortId }, {
    name,
    age,
    major,
  });
  
  res.status(201).send();
});


// 학생 데이터를 수정하는 페이지를 render합니다.
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const student = await Student.findOne({ shortId });
  
  res.render('edit', { student });
});

module.exports = router;