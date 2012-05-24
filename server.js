var http = require('http');
var mongo = require('mongoskin');
var config = require('./config.js');

config.setupenv();
var db = mongo.db(process.env.MONGO_URI);

http.createServer(function(req, res){
    "use strict";

    db.collection('things').find({greeting:/^Hello/},{greeting:true}).limit(10)
    .toArray(function(err, items){
        if(err) throw err;
        var greetings = "";
        for (var i = 0; i < items.length; i++ ){
            greetings = greetings + items[i].greeting + "\n";
        }
        
        res.writeHead(200, {'Content-Type':'text/plain'});
//        res.end('Hello World!\n\n' + JSON.stringify(items));
        res.end('Hello World!\n\n' + greetings);
    });

}).listen(process.env.PORT);
console.log('Server running at port ' + process.env.PORT);
