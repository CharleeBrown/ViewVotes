var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  async function getVotes(chamber) {
	const resp = await fetch("https://api.congress.gov/v3/bill/117?sort=updateDate+desc&api_key="+process.env.api_key);
	
	const voteList = await resp.json();
	const data = voteList;
	data.bills.forEach(bill => {
		console.log(bill.congress + "th Congress");
		console.log("Title: "+bill.title);
		console.log("\n" + bill.text)
		console.log("From: " + bill.originChamber)
		console.log("Last Updated: "+bill.updateDate);
		console.log("\n");
	});
  };
  getVotes();
  }
);

module.exports = router;
