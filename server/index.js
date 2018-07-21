const express = require('express');
const bodyParser = require('body-parser');
const { resolve, join } = require('path');

const app = express();

app.use(express.static(join(__dirname, '..', 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(process.env.PORT || 8090);
