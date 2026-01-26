import express from "express";

const app = express();

const youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  videoNum: "993개",
};

const youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  videoNum: "6.6천개",
};

const youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  videoNum: "726개",
};

let db = new Map();
let id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

app.listen(1234);
app.use(express.json());
app.post("/youtubers", function (req, res) {
  console.log(req.body);

  db.set(id++, req.body);

  res.json({
    message: `${db.get(id - 1).channelTitle}님, 축하드립니다.`,
  });

  app.get("/youtubers/:id", (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    const youtuber = db.get(id);

    if (youtuber == undefined) {
      res.json({
        message: "유튜버 정보를 찾을 수 없습니다.",
      });
    } else {
      res.json(youtuber);
    }
  });

  app.get("/youtubers", function (req, res) {
    let youtubers = {};
    db.forEach((value, key) => {
      youtubers[key] = value;
    });

    if (Object.keys(youtubers).length === 0) {
      return res.json({message: "조회할 유튜버가 없습니다."});
    }

    res.json(youtubers);
  });
});