var request = require('request');
var spotify = require('spotify');

var Twitter = require('twitter');
var twitterKeys = require('./keys.js');
var myKeys = twitterKeys.twitterKeys;
var myTwitter = new Twitter({
	consumer_key: myKeys.consumer_key,
	consumer_secret: myKeys.consumer_secret,
	access_token_key: myKeys.access_token_key,
	access_token_secret: myKeys.access_token_secret,
});

var fs = require('fs');

var command = process.argv[2];

var inputArray = [];

fs.appendFile(command, "", function(err) {

  // If an error was experienced we say it.
  
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});


function insertHere() {

}