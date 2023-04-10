// router 만들기
const express = require("express");
const productsRouter = require("./routes/products");

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

/* 라우터를 '/products' 경로에 연결 */
app.use("/products", productsRouter);

app.listen(8080);