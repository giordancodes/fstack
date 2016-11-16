var mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
	title: String,
	price: Number,
	description: String,
	featured: Boolean,
	image: String
})

module.exports = mongoose.model('Product', ProductSchema);