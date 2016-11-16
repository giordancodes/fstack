var mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	location: String,
	price: Number,
	featured: Boolean
})

module.exports = mongoose.model('Product', ProductSchema);