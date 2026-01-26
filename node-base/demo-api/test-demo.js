import express from "express";

const app = express();

// 서버 세팅 : 포트 넘버 1234로 설정
app.listen(1234);

// GET "/test"
app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

// GET "/test/1"
app.get("/test/1", function (req, res) {
  res.send("ONE!!");
});