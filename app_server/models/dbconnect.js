var mongoose = require( 'mongoose' );

var mongoURI = 'mongodb://ds023078.mlab.com:23078/core';

var options = {
  user: 'admin',
  pass: 'P@ssw0rd'
};

mongoose.connect(mongoURI, options);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + mongoURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});