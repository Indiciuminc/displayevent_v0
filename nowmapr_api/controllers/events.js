//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Events = mongoose.model('Event');

/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Create Event controller for API */
module.exports.eventsCreate = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};

/*Placeholder Read One Event controller for API */
module.exports.eventsReadOne = function (req, res) { };

/*Placeholder Update One Event controller for API */
module.exports.eventsUpdateOne = function (req, res) { };

/*Placeholder Delete One Event controller for API */
module.exports.eventsDeleteOne = function (req, res) { };