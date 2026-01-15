import server from "./server.js";
import router from "./router.js";
import requestHandler from "./requestHandler.js";
import mariadb from "./database/connect/mariadb.js";

mariadb.connect();

server.start(router.route, requestHandler);