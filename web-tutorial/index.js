import server from "./server.js";
import router from "./router.js";
import requestHandler from "./requestHandler.js";

server.start(router.route, requestHandler);