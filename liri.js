var twitterKeys = require ("./keys.js");

console.log(twitterKeys);
var Twitter = require ('twitter');
var T = new Twitter (twitterKeys);



// ----TO GER USER'S TWEETS------

 var params = {
 	screen_name: 'lokoso17',
 	count: 2
 }

T.get('statuses/user_timeline', params, getData);

function getData(error, tweets, response){
	console.log(tweets);
}


// function getData(error, tweets, response){
//  	var tweets = tweets.statuses;
// 	for (var i = 0; i < tweets.length; i++) {
// 		console.log(tweets[i].text);
// 	}	
// }