const express = require('express');
const bodyParser = require('body-parser');
const { resolve, join } = require('path');

const app = express();

app.use(express.static(join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  // console.log(`request:${JSON.stringify(req)}`);
  res.sendFile(resolve(__dirname, '..', 'dist', 'index.html'));
});

app.get(/\/product\/[0-9]+/, (req, res) => {
  // console.log(`request:${JSON.stringify(req)}`);
  res.sendFile(resolve(__dirname, '..', 'dist', 'index.html'));
});

app.get(/(?:service-worker\.js)$/, (req, res) => {
  // console.log(`request:${JSON.stringify(req)}`);
  res.sendFile(resolve(__dirname, '..', 'dist', 'service-worker.js'));
});

app.listen(process.env.PORT || 8090);

console.log('App is listening.');
