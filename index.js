const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();
const hpp = require('hpp');
const helmet = require("helmet");
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
require('./auth/passport');
const authRoutes = require('./controllers/auth');
const habitRoutes = require('./controllers/habits');
const completedTaskRoutes = require('./controllers/completedTasks');

const staticFiles = path.join(__dirname, './app/build')
app.use(express.static(staticFiles));

// Security middleware
app.use(cors({
  credentials: true, 
  origin: process.env.NODE_ENV === 'production' ? 'https://middi.app' : 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(logger('dev'))
//app.use(helmet());
//app.use(hpp());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/completed-tasks', completedTaskRoutes);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Now listening on port ${port}`));