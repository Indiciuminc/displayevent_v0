var mongoose = require( 'mongoose' );

var mongoURI = 'mongodb://ds023078.mlab.com:23078/core';

var options = {
  user: 'admin',
  pass: 'P@ssw0rd'
};

mongoose.connect(mongoURI, options);