const { Router } = require("express");
const { Ticket } = require("../models");

const router = Router();

// 지시사항을 참고하여 코드를 완성하세요.
router.post("/", async (req, res) => {
  const { airline, country, date } = req.body;
  
  if (!airline || !country || !date) {
    return res.status(400).json({
      status: "Error",
      error: "입력되지 않은 데이터가 있습니다.",
    });
  }
  
  const ticket = await Ticket.create({
    airline,
    country,
    date,
  });
  
  res.json(ticket);
});

// 항공권 데이터를 등록하는 페이지를 render합니다.
router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;