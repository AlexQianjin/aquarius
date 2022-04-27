const coursesService = require('../services/courses');
const utils = require('../utils/utils');
const catchErrors = require('../utils/catchErrors');

module.exports.getCourse = catchErrors(async (req, res) => {
    let course = await coursesService.getCourse();
    return utils.sendJSONresponse(res, 200, course);
});

module.exports.getMonthlyCourses = catchErrors(async (req, res) => {
    let courses = await coursesService.getMonthlyCourses();
    return utils.sendJSONresponse(res, 200, courses);
});
