var Keys = require ("./keys.js");


// console.log(twitterKeys);
var Twitter = require ('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');


var T = new Twitter (Keys);


// ----TO GER USER'S TWEETS------

var params = {
 	screen_name: 'lokoso17',
 	count: 20
}

T.get('statuses/user_timeline', params, getData);

function getData(error, tweets, response){
	console.log('My last 20 teets and date posted ');
	for (var i = 0; i < tweets.length; i++) {
		var thisTweet = tweets[i];
		console.log("-----------------------------------------------------------------------------------------");
		console.log('Date: ' + thisTweet.created_at);
		console.log('Tweet: ' + thisTweet.text);
		console.log('');
		console.log('');
	}	
}

// ----SPOTIFY------

 
var spotify = new Spotify({
  id: '517b2889ec0748d782d280175a088727',
  secret: '91e505e9c1dc4859a249889f4876812a'
});
 
spotify.search({ 
	type: 'track',
	limit: 1, 
	query: 'I want it that way' },
	function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("Spotify Music Info:");
console.log("___________________");
console.log('Artist: ' + data.tracks.items[0].artists[0].name); 
console.log('Track: ' + data.tracks.items[0].name);
console.log('Link: '+ data.tracks.items[0].preview_url);
console.log('Album: ' + data.tracks.items[0].album.name);
});


//------OMDB------

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rating: " + JSON.parse(body).imdbRating);
    console.log("Country Produced: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log('');
    console.log('');
  }
});
