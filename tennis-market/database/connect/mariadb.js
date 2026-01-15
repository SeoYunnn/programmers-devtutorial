import mariadb from "mysql2";

const connection = mariadb.createConnection({
  host: "localhost",
  port: 13306,
  user: "choonsik",
  password: "ralo2400",
  database: "devtutorial",
});

export default connection;