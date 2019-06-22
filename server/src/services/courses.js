let moment = require('moment');
const Course = require('../models/course');

module.exports.getCourse = () => {
	return new Promise((resolve, reject) => {
		let now = moment();
		
		Course.findOne(
			{
				year: now.year(),
				month: now.month() + 1,
				dayIndex: (now.day() + 6) % 7
			},
			function(err, data) {
				if (err) {
					reject(err);
				}
				if (data) {
					resolve(data);
				} else {
					resolve({ message: 'Course does not exist!' });
				}
			}
		);
	});
};
