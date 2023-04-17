const { Router } = require("express");
const { Ticket } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.delete("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  
  await Ticket.deleteOne({ shortId });
  
  res.status(201).send();
});


module.exports = router;