const coursesService = require('../services/courses');
const utils = require('../utils/utils');
const catchErrors = require('../utils/catchErrors');

module.exports.getCourse = catchErrors(async (req, res) => {
	let course = await coursesService.getCourse();
	return utils.sendJSONresponse(res, 200, course);
});
