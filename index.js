const express = require('express');
const session = require('cookie-session');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const staticFiles = path.join(__dirname, './app/build')

app.use(express.static(staticFiles));

// Security middleware
app.use(helmet());
app.use(hpp());

// Cookie session config
app.use(
  session({
    name: 'session',
    secret: 'xfAFmAb5wDhgrgpnRz7usYvalsD003Z_d0FTZ9USadQ',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 3), // 3 days
    secure: process.env.NODE_ENV === 'production'
  })
);
app.use(csurf());

app.get('/api/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Now listening on port ${port}`));