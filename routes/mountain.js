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
		Mountain.findOne({_id: req.params.id}, (err, mountain) => {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(mountain);
			}
		});
	})
	.put((req, res) => {
		Mountain.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}, (err, mountain) => {
			if (err){
				console.log(err);
				res.json(err);
			} else {
				res.json(mountain);
			}
		});
	})
	.delete((req, res) => {
		Mountain.remove({_id: req.params.id}, (err) => {
			if (err){
				console.log(err);
				res.json(err);
			} else {
				res.json({message: 'Deleted'});
			}
		});
	});


module.exports = router;
