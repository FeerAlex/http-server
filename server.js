let http = require('http');
let interval = process.argv.slice(2)[0] || 1000;
let server = http.createServer().listen(8080);
let timerId;

server.on('request', (req, res) => {
  if (!timerId) {
    timerId = setInterval(() => {
      let date = new Date().toISOString();
      console.log(date);
    }, interval);
  }

  res.end('<h1>Hello student from Loftschool!</h1>');
});
