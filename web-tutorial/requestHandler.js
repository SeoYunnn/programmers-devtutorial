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
  res.write("Main Page");
  res.end();
}

function login(res) {
  console.log("login");

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("Login Page");
  res.end();
}

const handle = {}; // key:value
handle["/"] = main;
handle["/login"] = login;

export default handle;