//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Evt = mongoose.model('Event');

/*Create radians distance for use in events lookup*/
var theEarth = (function() {
    var earthRadius = 6371; //kilometres; for miles use 3959
    
    var getDistanceFromRads = function(rads) {
        return parseFloat(rads * earthRadius);
    };
    
    var getRadsFromDistance = function(distance) {
        return parseFloat(distance/earthRadius);
    };
    
    return {
      getDistanceFromRads : getDistanceFromRads,
      getRadsFromDistance : getRadsFromDistance
    };
}) ();

/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Read All Events controller for API - Connect to Main page(?) */
module.exports.eventsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

/*Placeholder Create Event controller for API */
module.exports.eventsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

/*Placeholder Read One Event controller for API */
module.exports.eventsReadOne = function (req, res) {
    //Check that eventid exists in request parameters
    if (req.params && req.params.eventid) {
        Evt
          //Get eventid from the URL request parameter and give it to Mongoose findById method
          .findById(req.params.eventid)
          //.select('name coords info eventType')
          //Define callback to accept possible parameters from Mongoose connection
          .exec(function(err, event) {
            //Check that Mongoose returns an event, otherwise whether it returns an error
            if (!event) {
              sendJsonResponse(res, 404, {
                  "message" : "eventid not found"
              });
              return;
            } else if (err) {
              sendJsonResponse(res, 404, err);
              return;
            }
            //If Mongoose didn't throw and error, return the correct event object
            sendJsonResponse(res, 200, event);
          });
    //If request parameters didn't include eventid, send appropriate 404 response
    } else {
        sendJsonResponse(res, 404, {
            "message" : "No eventid in request"
        });
    }
};

/*Placeholder Update One Event controller for API */
module.exports.eventsUpdateOne = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};

/*Placeholder Delete One Event controller for API */
module.exports.eventsDeleteOne = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};