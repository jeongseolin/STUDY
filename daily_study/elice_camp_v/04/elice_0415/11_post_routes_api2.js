const { Router } = require("express");
const { Cosmetic } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.post("/", async (req, res) => {
  const { name, category, price } = req.body;
  
  const cosmetic = await Cosmetic.create({
    name,
    category,
    price,
  });
  
  res.json(cosmetic);
});

// 화장품 데이터를 등록하는 페이지를 render합니다.
router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;