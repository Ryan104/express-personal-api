const mongoose = require('mongoose');

const MountainSchema = new mongoose.Schema({
	name: {type: String, required: true },
	elevation: {
		type: Number,
		min: [14000, '14ers must be at least 14,000ft'],
		required: true
	},
	summitLocation: {
		lat: String,
		lon: String
	},
	routeName: String,
	routeLength: {type: Number, required: true },
	routeClass: Number,
	link: String
});

module.exports = mongoose.model('Mountain', MountainSchema);
