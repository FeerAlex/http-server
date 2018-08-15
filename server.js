let http = require('http');
let interval = process.argv.slice(2)[0] || 1000;
let stop = process.argv.slice(2)[1] || 1000;
let timerId = null;

const getDate = () => new Date().toISOString();

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    if (!timerId) {
      timerId = setInterval(() => {
        console.log(getDate());
      }, interval);
    } else {
      setTimeout(() => {
        clearInterval(timerId);
        timerId = null;
        res.end(getDate());
      }, stop);
    }
  }
});

server.listen(3000, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on 3000`);
});
