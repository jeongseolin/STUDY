const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.post("/", async (req, res) => {
  const { name, age, major } = req.body;
  
  const student = await Student.create({
    name,
    age,
    major,
  });
  
  res.json(student);
});

// 학생 데이터를 등록하는 페이지를 render합니다.
router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;