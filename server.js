var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete Ninja now!');
});

app.get('/nickname', function(request, response){
    response.send('smiling sheep');
});

app.listen(process.env.PORT || 4000);