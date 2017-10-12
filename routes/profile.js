const express = require('express');
const router = express.Router();

const personalData = {
  name: 'Ryan Elliott',
  github_link: 'https://github.com/Ryan104',
  github_profile_image: 'https://avatars1.githubusercontent.com/u/18182439?v=4&s=400&u=cf2f8ded10522a85fcac07d852995acd5af83b41',
  current_city: 'Denver',
  hobbies: ['Coding', 'Coding', 'Coding', 'Coding', 'Hiking'],
  days_old: Math.round(((new Date()) - (new Date(1989, 5, 16)))/(60*60*24*1000))
};

router.route('/profile')
	.get((req,res) => {
		res.json(personalData);
	});

module.exports = router;