//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Evt = mongoose.model('Event');

/*Create radians distance for use in events lookup
var theEarth = (function() {
    var earthRadius = 6371; //kilometres, for miles use 3959 (If geoNear needs radians)
    
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
}) ();*/

/*Create meters distance for use in events lookup*/
var mDist = (function() {
    var meters = 1000; //kilometres, for miles use 1609
    
    var getDistanceFromMs = function(mets) {
        return parseFloat(mets / meters);
    };
    
    var getMsFromDistance = function(distance) {
        return parseFloat(distance * meters);
    };
    
    return {
      getDistanceFromMs : getDistanceFromMs,
      getMsFromDistance : getMsFromDistance
    };
}) ();

/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Read All Events controller for API - Connect to Main page(?) */
module.exports.eventsListByDistance = function (req, res) {
  //Get lat and lng from Main page code
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);
  var point = {
      type: "Point",
      coordinates: [lng, lat]
  };
  
  //Create geoNear options object - to include user's settings distance radius setting later
  var geoOptions = {
      maxDistance: mDist.getMsFromDistance(parseFloat(req.query.maxDistance)),
      spherical: true
      /* query: { eventType: userTypeArray }  //Add this later to use userSettings eventType list to narrow results*/
      //num: 10 //This will get only the 10 closest within the maxDistance
  };
  
  //Check that lat and lng query parameters exist in the right format
  if ((!lng && lng!==0) || (!lat && lat!==0)) {
      sendJsonResponse(res, 404, {
          "message" : "lng and lat query parameters are required"
      });
      return;
  }
  Evt.geoNear(point, geoOptions, function (err, results, stats) {
      //New array to hold results objects
      var locations = [];
      
      //Check whether geoNear query throws an error.
      if (err) {
          sendJsonResponse(res, 404, err);
      } else {
        results.forEach(function(doc) {
              locations.push({
                  mDistance: doc.dis,
                  distance: mDist.getDistanceFromMs(doc.dis),
                  name: doc.obj.name,
                  address: doc.obj.address,
                  eventType: doc.obj.eventType,
                  coords: doc.obj.coords,
                  details: doc.obj.info,
                  _id: doc.obj._id
              });
        });
        sendJsonResponse(res, 200, locations);
      }
  });
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