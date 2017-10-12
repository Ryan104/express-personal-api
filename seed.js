// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

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

// clear db
db.Mountain.remove({}, (err) => {
	if (err) console.log(err);
	console.log('Seed.js: cleared Mountain collection');
	db.Mountain.create(mountains, err => {
		if (err){
			return console.log(err);
		} else {
			console.log('Seed.js: created seed mountain data');
			process.exit(); // we're all done! Exit the program.
		}
	});
});



// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
