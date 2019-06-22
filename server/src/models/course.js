const mongoose = require('mongoose');
const { getConnection } = require('../connections/mongoose');

const courseItemSchema = new mongoose.Schema({
	cousreIndex: Number,
	time: String,
	name: String,
	coach: String,
	location: String
});

const courseSchema = new mongoose.Schema({
	year: Number,
	month: Number,
	dayIndex: Number,
	dayofweek: String,
	courses: [courseItemSchema]
});

const Course = getConnection().model('Course', courseSchema, 'courses');

module.exports = Course;
