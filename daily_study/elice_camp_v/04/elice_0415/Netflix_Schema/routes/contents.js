// 라우터 모듈과 정의한 Content 모델을 불러오세요.
const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

// "/" 경로에서 작품 목록 조회을 조회하는 라우터를 작성하세요.
router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

// 특정 작품을 조회하는 API를 구현하세요.
router.get("/:show_id", async (req, res) => {
  const search_id = req.params.show_id;
  const content = await Content.find({ show_id: search_id });
  res.json(content);
});

// 작품을 추가하는 API를 구현하세요.
router.post("/", async (req, res) => {
  const { show_id, title, type, director } = req.body;

  const content = await Content.create({
    show_id,
    type,
    title,
    director,
  });
  res.json(content);
});

// 작품을 수정하는 API를 구현하세요.
router.put("/:show_id", async (req, res) => {
  const { show_id } = req.params;
  const { title, type, director } = req.body;

  const content = await Content.updateOne(
    { show_id },
    {
      type,
      title,
      director,
    }
  );
  res.json(content);
});

// 작품을 삭제하는 API를 구현하세요.
router.delete("/:show_id", async (req, res) => {
  const { show_id } = req.params;

  const content = await Content.deleteOne({ show_id });
  res.send(content);
});


// 작성한 라우터를 exports하세요.
module.exports = router;