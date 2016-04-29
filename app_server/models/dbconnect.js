var mongoose = require( 'mongoose' );

var mongoURI = 'mongodb://ds023078.mlab.com:23078/core';

var options = {
  user: 'admin',
  pass: 'P@ssw0rd'
};

mongoose.connect(mongoURI, options);

//Emulate SIGINT behaviour if app is running on Windows
var readLine = require ("readline");
if (process.platform === "win32"){
    var rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function(){
        process.emit ("SIGINT");
    });
}

//Listeners to establish Mongoose connection status
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + mongoURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

//Terminate connection properly
var exterminateCxn = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

/* Listeners to call exterminateCxn when the application terminates 
   Important to add listeners if environment uses any different types 
   of termination signals!*/
//Listening for nodemon restarts
process.once('SIGUSR2', function () {
    exterminateCxn('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
//Listening for app termination
process.on('SIGINT', function () {
    exterminateCxn('app termination', function () {
        process.exit(0);
    });
});
//Listening for Heroku app termination
process.on('SIGTERM', function () {
    exterminateCxn('Heroku app shutdown', function () {
        process.exit(0);
    });
});

//Get the schema for Nowmapr events
require('./events');