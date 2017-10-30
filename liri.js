var Keys = require ("./keys.js");


// console.log(twitterKeys);
var Twitter = require ('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');


// var twitterKeys = keys.twitterKeys;
// var spotifyKeys = keys.spotifyKeys;
// // var omdbKey = keys.omdbKey;

var T = new Twitter (Keys);
var spotify = new Spotify (Keys);


// ----TO GER USER'S TWEETS------

var params = {
 	screen_name: 'lokoso17',
 	count: 20
}

T.get('statuses/user_timeline', params, getData);

function getData(error, tweets, response){
	for (var i = 0; i < tweets.length; i++) {
		var thisTweet = tweets[i];
		console.log('Date: ' + thisTweet.created_at);
		console.log('Tweet: ' + thisTweet.text);
	}	
}

// ----SPOTIFY------

 
spotify.search({ 
	type: 'track', 
	query: 'I want it that way'
	}, 
	function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});