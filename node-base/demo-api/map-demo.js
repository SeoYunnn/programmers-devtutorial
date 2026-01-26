import express from "express";

const app = express();
app.listen(1234);

app.get("/:id", function (req, res) {
  let {id} = req.params;
  id = parseInt(id); // "숫자" => 숫자

  if (db.get(id) == undefined) {
    res.json({
      message: "없는 상품입니다.",
    });
  } else {
    res.json({
      id: id,
      productName: db.get(id),
    });
  }
});

let notebook = {
  productName: "Notebook",
  price: 2000000,
};

let cup = {
  productName: "Cup",
  price: 100000,
};

let chair = {
  productName: "Chair",
  price: 200000,
};

let poster = {
  productName: "Poster",
  price: 20000,
};

let db = new Map();
db.set(1, notebook); // 키로 밸류를 찾을 수 있는 한 쌍을 저장
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);

console.log(db);
console.log(db.get(1));
// console.log(db.get("1"));
console.log(db.get(2));
console.log(db.get(3));