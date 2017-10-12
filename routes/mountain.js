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
		Mountain.create(req.body, (err, mountain) => {
			if (err) {
				console.log(err);
				res.json(err);	
			} else {
				res.json(mountain);				
			}
		});
	});
router.route('/14ers/:id')
	.get((req,res) => {
		Mountain.find({_id: req.params.id}, (err, mountain) => {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(mountain);
			}
		});
	});
	//.put()
	//.delete();


module.exports = router;