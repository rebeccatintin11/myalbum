// var http = require("https");
//
// var request = http.get("https://teamtreehouse.com/rebeccalin2.json", function(response){
//
//   console.log(response.statusCode);
// });

//access token: 3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706
var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.
ig.use({ access_token: '3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706' });
ig.use({ client_id: ' 	517804636ecd49c4a0e4284d04705d00',
         client_secret: '97a050b11d664272baee604b9f08565d' });

ig.media_popular(function(err,medias,remaining,limit){

   console.log('medias',medias);
   res.send('You made it!!');
});
