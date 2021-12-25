const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to home");
    res.end();
  } else if (req.url === "/about") {
    res.write("About page");
    res.end();
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page :(</p>
    <a href="/">Go to home</a>
  `);
  }
});

server.listen(5000);
