import fs from "fs";

const main_view = fs.readFileSync("./main.html", "utf8");
const orderlist_view = fs.readFileSync("./orderlist.html", "utf8");

import mariadb from "./database/connect/mariadb.js";

function main(res) {
  console.log("main");

  mariadb.query("SELECT * FROM product", function (err, rows) {
    if (err) {
      console.log("에러 발생 상세 내용:", err);
      return;
    }
    console.log(rows);
  });

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(main_view);
  res.end();
}

function redRacket(res) {
  fs.readFile("./img/redRacket.png", function (err, data) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(data);
    res.end();
  });
}

function blueRacket(res) {
  fs.readFile("./img/blueRacket.png", function (err, data) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(data);
    res.end();
  });
}

function blackRacket(res) {
  fs.readFile("./img/blackRacket.png", function (err, data) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(data);
    res.end();
  });
}

function order(res, productId) {
  res.writeHead(200, {"Content-Type": "text/html"});

  mariadb.query("INSERT INTO orderlist VALUES(" + productId + ", '" + new Date().toLocaleString() + "');",
    function (err, rows) {
      console.log(rows);
    });

  res.write("order page");
  res.end();
}

function orderlist(res) {
  res.writeHead(200, {"Content-Type": "text/html"});

  mariadb.query("SELECT * FROM orderlist",
    function (err, rows) {
      res.write(orderlist_view);

      rows.forEach(element => {
        res.write("<tr>"
          + "<td>" + element.product_id + "</td>"
          + "<td>" + element.order_date + "</td>"
          + "</tr>");
      });
      res.write("</table>");
      res.end();
    });
}

const handle = {}; // key:value
handle["/"] = main;
handle["/order"] = order;
handle["/orderlist"] = orderlist;

/* image directory */
handle["/img/redRacket.png"] = redRacket;
handle["/img/blueRacket.png"] = blueRacket;
handle["/img/blackRacket.png"] = blackRacket;

export default handle;