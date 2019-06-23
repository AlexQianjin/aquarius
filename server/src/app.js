const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const env = require('dotenv');
env.config({
	path: path.resolve(process.cwd(), `./config/${process.env.NODE_ENV}.env`)
});

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

indexRouter(app);

module.exports = app;
