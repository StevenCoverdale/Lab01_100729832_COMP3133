var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Enable body-parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Default GET route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route for form submission
router.post('/addUser', function(req, res) {
  console.log("POST parameters received:");
  console.log(req.body);

  res.send('POST received!');
});

module.exports = router;