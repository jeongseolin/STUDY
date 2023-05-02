const { Router } = require("express");
const { Snack } = require("../models");

const router = Router();

// 새로운 과자를 추가하는 API를 만드세요.
router.post('/', async (req,res,next) => {
  // 과자의 name, price, company를 body를 통해 전달 받으세요.
  const { name, price, company } = req.body;
  
  try {
  // DB에 동일한 name이 존재하는 경우 에러 메시지를 반환하세요.
    const existingSnack = await Snack.findOne({ name });
    if (existingSnack) {
        return res.status(400).json({
            status: "Error",
            error: "이미 존재하는 과자 이름입니다.",
        });
    }
  // DB에 동일한 name이 존재하지 않는 경우 새로운 과자를 DB에 삽입하세요.
    const newSnack = await Snack.create({ name, price, company });
  
  // 삽입한 snack 데이터를 json으로 전달하세요 .
    return res.json(newSnack);
  } catch (error) {
      next(error);
  }

});

router.get("/", (req, res) => {
  res.render("snack");
});

module.exports = router;
