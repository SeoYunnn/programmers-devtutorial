import express from "express";

const app = express();

app.listen(1234);

app.get("/products/:n", function (req, res) {
  console.log(req.params);
  console.log(req.params.n);
});

app.get("/watch", function (req, res) {

  // 객체의 비구조화
  const {v, t1} = req.query;
  console.log(v);
  console.log(t1);

  res.json({
    video: v,
    timeline: t1,
  });
});