'use Strict';

var mongoose = require('mongoose'),
	UserData = mongoose.model('UserData');


exports.read_userdata = function(req, res) {
	UserData.findOne({'loanId':req.params.loanId}, function(err, userData){
		if (err)
			res.send(err);
		res.json(userData);
	});
};

exports.create_userdata = function(req, res) {
	var new_userdata = new UserData(req.body);
	new_userdata.save(function(err, userData) {
		if (err)
			res.send(err);
		res.json(userData);
	});
};