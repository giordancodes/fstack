var mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	name: String,
	email: String
});

let PostSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	location: String,
	user: String,
	price: Number,
	featured: Boolean,
	userDetails: UserSchema
});

module.exports = mongoose.model('Post', PostSchema);