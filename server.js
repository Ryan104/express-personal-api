// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

const { profileRoute, mountainRoute } = require('./routes');

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Ryan104/express-personal-api/blob/master/README.md", // CHANGE ME
    base_url: "https://infinite-hollows-62292.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints", active: true},
      {method: "GET", path: "/api/profile", description: "Data about me", active: true}, 
      {method: "GET", path: "/api/14ers", description: "See all current mountains", active: false},
      {method: "POST", path: "/api/14ers", description: "Add a mountain", active: false},
      {method: "GET", path: "/api/14ers/:id", description: "Get a mountain with the given ID", active: false},
      {method: "GET", path: "/api/14ers/:id", description: "Get a mountain with the given ID", active: false},
      {method: "PUT", path: "/api/14ers/:id", description: "Edit a mountain with the given ID", active: false},
      {method: "DELETE", path: "/api/14ers/:id", description: "Edit a mountain with the given ID", active: false},

    ]
  });
});

app.use('/api', profileRoute);
app.use('/api', mountainRoute);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
