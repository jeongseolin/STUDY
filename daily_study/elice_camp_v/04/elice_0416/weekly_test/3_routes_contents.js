const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

// 감독 이름을 URI로 입력 받아, 감독이 어떤 타입의 작품을 주로 제작하는지 반환하는 API를 만드세요.
router.get("/:directorName", async (req, res) => {
  try {
    const directorName = req.params.directorName;
    const contents = await Content.find({ director: directorName });

    if (contents.length === 0) {
      return res.status(404).json({ message: "No works found for this director." });
    }

    const types = contents.reduce((acc, content) => {
      const type = content.type;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const mainType = Object.keys(types).reduce((a, b) => types[a] > types[b] ? a : b);

    let message = "";
    if (mainType === "Movie") {
      message = `${directorName} 감독은 영화 감독입니다.`;
    } else if (mainType === "TV Show") {
      message = `${directorName} 감독은 TV 프로그램 감독입니다.`;
    }

    res.json({ director: directorName, mainType: mainType, message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
