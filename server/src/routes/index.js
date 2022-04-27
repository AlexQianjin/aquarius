var usersRouter = require('./users');
let coursesRouter = require('./courses');

module.exports = function(app) {
    app.use('/api/users', usersRouter);
    app.use('/api/courses', coursesRouter);
};
