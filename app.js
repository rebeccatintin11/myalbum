//user_id: 3328304
//client_id: 517804636ecd49c4a0e4284d04705d00
//client_secret: 97a050b11d664272baee604b9f08565d
//access token: 3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706
var http = require("http");
var https = require("https")
var ig = require('instagram-node-lib');
var express = require('express');
var app = express();
var server = http.createServer(app);

ig.set('client_id', '517804636ecd49c4a0e4284d04705d00');
ig.set('client_secret', '97a050b11d664272baee604b9f08565d');
ig.set('access_token', '3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706');

app.all('/',function(request, response){

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.header('application/json');
  //response.send('home');
  var user_id;
  var get_user_id = https.request('https://api.instagram.com/v1/users/self/?access_token=3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706',
        function(res){
          var body = '';

          console.log(response.statusCode);
          res.on('data', function(chunk){
            body += chunk;
          })

          res.on('end', function(){
            var profile = JSON.parse(body);
            user_id = profile.data.id;
            //response.send(profile);
            console.log(user_id);
          });
  });
  get_user_id.end();
  get_user_id.on('error', function(e) {
     text = "error at get_user_id";
  });
  // https://api.instagram.com/v1/users/self/media/liked?access_token=3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706
  var get_my_post = https.request('https://api.instagram.com/v1/users/self/media/recent/?access_token=3328304.5178046.92ec4e0d6dc749fe9ff72182699b6706',
        function(res){
          var body = '';

          console.log(response.statusCode);
          res.on('data', function(chunk){
            body += chunk;
          })

          res.on('end', function(){
            var photos = JSON.parse(body);
            response.send(photos);
          });
  });
  get_my_post.end();
  get_my_post.on('error', function(e) {
     text = "error at get_my_post";
  });


});
server.listen(8888,'127.0.0.1',function(err){
  if(err){
    console.error(err);
  } else {
    console.log('server running');
  }
});
