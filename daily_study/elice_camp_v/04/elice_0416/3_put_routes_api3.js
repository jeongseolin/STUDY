const { Router } = require("express");
const { Ticket } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.put("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;
  const { airline, country, date } = req.body;

  try {
    if (!airline || !country || !date) {
      throw new Error("누락된 데이터가 있습니다.");
    }

    const ticket = await Ticket.updateOne(
      { shortId },
      {
        airline,
        country,
        date,
      }
    );

    res.status(201).send();
  } catch (err) {
    next(err);
  }
});

// 항공권 데이터를 수정하는 페이지를 render합니다.
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  const ticket = await Ticket.findOne({ shortId });

  res.render("edit", { ticket });
});

module.exports = router;
