let http = require('http');
let interval = process.env.INTERVAL || 1000;
let stop = process.env.STOP || 5000;

const getDate = () => new Date().toUTCString();

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return;
  }

  let timerId = setInterval(() => {
    console.log(getDate());
  }, interval);

  setTimeout(() => {
    clearInterval(timerId);
    timerId = null;
    console.log(getDate());
    res.end(getDate());
  }, stop);
});

server.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on 3000`);
});
