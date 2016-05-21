//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Events = mongoose.model('Event');

/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Create Review controller for API */
module.exports.reviewsCreate = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};

/* Placeholder Read All Reviews for selected Event controller for API */
module.exports.reviewsListByEventid = function (req, res) { };

/* Placeholder Read One Review for selected Event controller for API */
module.exports.reviewsReadOne = function(req, res) { };

/* Placeholder Update One Review for selected Event controller for API */
module.exports.reviewsUpdateOne = function (req, res) { };

/* Placeholder Delete One Review for selected Event controller for API */
module.exports.reviewsDeleteOne = function (req, res) { };