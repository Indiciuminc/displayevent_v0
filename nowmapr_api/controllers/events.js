//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Evt = mongoose.model('Event');

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
module.exports.eventsReadOne = function (req, res) {
    Evt
      //Get eventid from the URL request parameter and give it to Mongoose findById method
      .findById(req.params.eventid)
      .exec(function(err, event) {
        sendJsonResponse(res, 200, event);
      });
};

/*Placeholder Update One Event controller for API */
module.exports.eventsUpdateOne = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};

/*Placeholder Delete One Event controller for API */
module.exports.eventsDeleteOne = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};