const { Router } = require("express");
const { Cosmetic } = require("../models");

const router = Router();

router.delete("/:shortId", async (req, res) => {
  // 지시사항을 참고하여 코드를 완성하세요.
  const { shortId } = req.params;
  
  await Cosmetic.deleteOne({ shortId });
  
  res.status(201).send();
});


module.exports = router;