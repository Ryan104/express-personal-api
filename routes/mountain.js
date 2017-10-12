const express = require('express');
const router = express.Router();

// models
const { Mountain } = require('../models');

//fake data
const mountains = [
	{
		name: 'Mt. Bierstadt',
		elevation: 14060,
		summitLocation: {
			lat: '39.582638° N',
			lon: '-105.668610° W'
		},
		routeName: 'West Slopes',
		routeLength: 7.00,
		routeClass: 2,
		link: 'https://www.14ers.com/route.php?route=bier1&peak=Mt.+Bierstadt'
	},
	{
		name: 'Quandry Peak',
		elevation: 14265,
		summitLocation: {
			lat: '39.397236° N',
			lon: '-106.106430° W'
		},
		routeName: 'East Ridge',
		routeLength: 6.75,
		routeClass: 2,
		link: 'https://www.14ers.com/route.php?route=quan1&peak=Quandary+Peak'
	}
];

//routes
router.route('/14ers')
	.get((req, res) => {
		res.json(mountains);
	})
	.post((req, res) => {
		console.log(req.body);
		Mountain.create(req.body, (err, mountain) => {
			if (err) console.log(err);
			res.json(mountain);
		});
	});


module.exports = router;