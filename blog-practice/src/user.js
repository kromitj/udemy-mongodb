const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "Name is required"]
	},
	password: {
		type: String
	},
	email: {
		type: String
	}
})

const User = mongoose.model('user', userSchema);

module.exports = User

