import express from "express";

const app = express();

// 서버 세팅 : 포트 넘버 1234로 설정
app.listen(1234);

// GET /hello, /bye, /nicetomeetu
app.get("/hello", function (req, res) {
  res.json({
    say: "안녕하세요.",
  });
});

app.get("/bye", function (req, res) {
  res.json({
    say: "안녕히가세요.",
  });
});

app.get("/nicetomeetu", function (req, res) {
  res.json({
    say: "만나서 반갑습니다.",
  });
});