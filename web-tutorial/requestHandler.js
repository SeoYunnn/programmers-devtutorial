function main(res) {
  console.log("main");

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