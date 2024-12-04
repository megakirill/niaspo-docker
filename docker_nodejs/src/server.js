const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Привет из Node.js приложения, запущенного в Docker-контейнере на облачном хостинге!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
