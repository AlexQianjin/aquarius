const utils = require('./utils');

module.exports = handler => async (req, res) => {
	try {
		await handler(req, res);
	} catch (err) {
		return utils.sendJSONresponse(res, 401, err);
	}
};
