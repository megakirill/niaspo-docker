const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/run') {
    // Обработка POST-запроса к /run
    // (Ваш существующий код)
  } else if (req.method === 'GET' && req.url === '/') {
    // Обработка GET-запроса к /
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Server Maven is ready</h1>');
  } else {
    // Все остальные запросы возвращают 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
