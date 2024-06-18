var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  async function getVotes(chamber) {
	const resp = await fetch("https://api.congress.gov/v3/bill/117?fromDateTime=2022-08-04T04:02:00Z&toDateTime=2022-09-30T04:03:00Z&sort=updateDate+desc&api_key=lf2rUP1OzbBazrHXK4P1uP0xDsYPekSy4qaikQjV");
	
	const voteList = await resp.json();
	console.log(voteList);
  }
  getVotes();
  }
);

module.exports = router;
