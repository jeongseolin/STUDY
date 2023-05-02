// index.js
const express = require("express");
const mongoose = require("mongoose");

// model을 불러옵니다.
const { Ticket } = require("./models");

// 작성한 router를 불러오세요.
const ticketRouter = require("./routes/tickets");

// app을 생성하고 mongoDB를 연결합니다.
const app = express();
mongoose.connect("mongodb://localhost:27017/flights");

// JSON 데이터를 제대로 파싱하기 위한 코드입니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구를 띄웁니다.
app.get("/", (req, res) => {
  res.send("Home Page");
});

// router를 연결하세요.
app.use("/tickets", ticketRouter);

// favicon 에러를 해결하기 위한 코드입니다.
app.get("/favicon.ico", (req, res) => res.status(204));

// 8080번 포트에 연결합니다.
app.listen(8080);

// 항공권 데이터를 데이터베이스에 삽입합니다.
async function run() {
  let tickets = [
    {
      airline: "대한항공",
      country: "일본",
      date: "2021-12-11",
    },
    {
      airline: "대한항공",
      country: "독일",
      date: "2021-02-10",
    },
    {
      airline: "제주항공",
      country: "프랑스",
      date: "2022-01-23",
    },
    {
      airline: "아시아나항공",
      country: "중국",
      date: "2020-07-16",
    },
    {
      airline: "티웨이항공",
      country: "영국",
      date: "2022-01-12",
    },
    {
      airline: "에어서울",
      country: "호주",
      date: "2022-07-12",
    },
    {
      airline: "제주항공",
      country: "미국",
      date: "2022-08-02",
    },
    {
      airline: "진에어",
      country: "태국",
      date: "2021-04-09",
    },
    {
      airline: "티웨이항공",
      country: "중국",
      date: "2023-01-12",
    },
    {
      airline: "아시아나항공",
      country: "베트남",
      date: "2020-12-18",
    },
    {
      airline: "이스타항공",
      country: "일본",
      date: "2023-01-11",
    },
    {
      airline: "대한항공",
      country: "프랑스",
      date: "2022-04-23",
    },
  ];

  await Ticket.create(tickets);
}

run();







// routes/tickets.js
// 지시사항을 참고하여 코드를 완성하세요.
const { Router } = require("express");
const { Ticket } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const tickets = await Ticket.find({});

  res.json(tickets);
});

module.exports = router;
