const express = require('express');
const router = express.Router();

// models
const { Mountain } = require('../models');

//routes
router.route('/14ers')
	.get((req, res) => {
		Mountain.find({}, (err, mountains) => {
			res.json(mountains);
		});
	})
	.post((req, res) => {
		console.log(req.body);
		Mountain.create(req.body, (err, mountain) => {
			if (err) console.log(err);
			res.json(mountain);
		});
	});


module.exports = router;