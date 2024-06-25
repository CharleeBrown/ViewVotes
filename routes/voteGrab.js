var express = require('express');
var router = express.Router();



router.get('/', async function(req, res, next) {
	try {
	  // Fetch data from API
	  const response = await fetch("https://api.congress.gov/v3/bill/117/hr?sort=updateDate+desc&api_key=" + process.env.api_key);
	  if (!response.ok) {
		throw new Error('Failed to fetch data');
	  }
	  const data = await response.json();
	  console.log(data.bills);
	  	
	  // Render Pug template and pass data
	  res.render('chambers', { title: 'Chambers', bills: data.bills }); // Assuming 'data.bills' is the array of bills from API response
	} catch (error) {
	  next(error); // Pass error to the error handler middleware
	}
  });

module.exports = router;
