'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDataSchema = new Schema({
	loanId: {type: String,unique: true},
	ssn: String,
	dob: String,
	phone: String,
	ecoa: String,
	lastName: String,
	firstName: String,
	middleName: String,
	prevLastName: String,
	prevFirstName: String,
	prevMiddleName: String,
	addressStreet: String,
	addressCity: String,
	addressState: String,
	addressZip: String,
	prevAddressStreet: String,
	prevAddressCity: String,
	prevAddressState: String,
	prevAddressZip: String
});

module.exports = mongoose.model('UserData',UserDataSchema);