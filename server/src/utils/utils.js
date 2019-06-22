module.exports = {
	sendJSONresponse: function(res, status, content) {
		res.status(status);
		res.json(content);
	}
};
