const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const staticFiles = path.join(__dirname, './app/build')

app.use(express.static(staticFiles));

app.get('/api/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Now listening on port ${port}`));