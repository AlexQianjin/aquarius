const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// const env = require('dotenv');
// env.config({
// 	path: path.resolve(process.cwd(), `./config/${process.env.NODE_ENV}.env`)
// });
require('dotenv').config();
console.log(process.env.NODE_ENV);

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

indexRouter(app);

app.route('*').get((req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
