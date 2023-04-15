// 지시사항을 참고하여 코드를 완성하세요.
const { Router } = require("express");
const { Cosmetic } = require("../models");

const router = Router();

router.get("/:name", async (req, res) => {
  const search_name = req.params.name;
  
  const cosmetics = await Cosmetic.find({name: search_name});

  res.json(cosmetics);
});

module.exports = router;
