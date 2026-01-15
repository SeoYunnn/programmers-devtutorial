import http from "http";

function start(route, handle) {
  function onRequest(req, res) {
    // let pathname = url.parse(req.url).pathname;
    // 최신 방식 url
    const baseURL = `http://${req.headers.host}`;
    const myUrl = new URL(req.url, baseURL);
    const pathname = myUrl.pathname;

    const queryData = Object.fromEntries(myUrl.searchParams);

    if (pathname === "/favicon.ico") {
      res.writeHead(200, {"Content-Type": "image/x-icon"});
      return res.end();
    }
    // 라우터 함수 호출
    route(pathname, handle, res, queryData.productId);
  }

  http.createServer(onRequest).listen(8888);
}

export default {start};