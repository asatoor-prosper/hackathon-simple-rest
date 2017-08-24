'use strict';
module.exports = function(app) {
	var eoscarsvc = require('../controllers/eoscarsvcController');

	app.route('/eoscarsvc/v1/loans/:loanId')
		.get(eoscarsvc.read_userdata);
	app.route('/eoscarsvc/v1/loans/userdata')
		.post(eoscarsvc.create_userdata);

};