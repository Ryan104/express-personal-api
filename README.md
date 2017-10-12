# Personal API

The goal was to build an API about myself. The API would incorporate:
* Well-documented **JSON API** Endpoints
* A full set of **REST-ful Routes** (GET, POST, UPDATE, DELETE)
* At least one **CRUD-able resource** (Create, Read, Update, Destroy)
* and an `/api/profile` endpoint with some basic **details about myself**

## Heroku
The API can be accessed on heroku here: https://infinite-hollows-62292.herokuapp.com

## Documentation/Endpoints
### /api
The documentation can be found here: https://infinite-hollows-62292.herokuapp.com/api

### /profile
Static 'about me' data is found here

### /14ers
A fully CRUDable route for the 14er database
`?maxLength=` - query parameter is also available to search the data by a max route length

`/14ers/:id` - the route for showing individual data points as well as updating and deleting them