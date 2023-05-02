const { Router } = require("express");
const { Student } = require("../models");

const router = Router();

router.delete("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  
  // 지시사항을 참고하여 코드를 완성하세요.
  await Student.deleteOne({ shortId });
  res.status(201).send();
});


module.exports = router;