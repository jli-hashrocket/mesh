const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	email: {
		type: String
	},
  password: {
    type: String
  },
  company: {
    type: String
  }
})

module.exports = mongoose.model('user', UserSchema);