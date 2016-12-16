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