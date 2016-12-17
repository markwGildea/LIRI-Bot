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
request('http://www.google.com', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage. 
    }
});

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data' 
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


function insert() {

}
