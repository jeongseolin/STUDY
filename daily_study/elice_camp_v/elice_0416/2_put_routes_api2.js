const { Router } = require("express");
const { Cosmetic } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.put("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const { name, category, price } = req.body;
  
  const cosmetic = await Cosmetic.updateOne({ shortId }, {
    name,
    category,
    price,
  });
  
  res.status(201).send();
});

// 화장품 데이터를 수정하는 페이지를 render합니다.
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  const cosmetic = await Cosmetic.findOne({ shortId });
  
  res.render('edit', { cosmetic });
});

module.exports = router;