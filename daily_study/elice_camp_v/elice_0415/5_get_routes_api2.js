// 지시사항을 참고하여 코드를 완성하세요.
const { Router } = require('express');
const { Cosmetic } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const cosmetics = await Cosmetic.find({});

  res.json(cosmetics);
});

module.exports = router;
