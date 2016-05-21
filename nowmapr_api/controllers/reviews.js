//Give controller access to database connection
var mongoose = require('mongoose');
//Bring in Event model (from '/app_server/models/events.js' schema) to interact with Events collection
var Evt = mongoose.model('Event');

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
module.exports.reviewsReadOne = function(req, res) {
    //Check that eventid and reviewid exist in request parameters
    if (req.params && req.params.eventid && req.params.reviewid) {
        Evt
          //Get eventid from the URL request parameter and give it to Mongoose findById method
          .findById(req.params.eventid)
          .select('name eventType reviews')
          //Define callback to accept possible parameters from Mongoose connection
          .exec(
            function(err, event) {
              var response, review;
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
              //Check that returned Event has reviews
              if (event.reviews && event.reviews.length > 0) {
                  review = event.reviews.id(req.params.reviewid);
                  if (!review) {
                      sendJsonResponse(res, 404, {
                          "message" : "reviewid not found"
                      });
                  } else {
                      //If review is found, build response object with event name, id and review
                      response = {
                          event : {
                              name : event.name,
                              id : req.params.eventid
                          },
                          review : review
                      };
                      sendJsonResponse(res, 200, response);
                  }
              } else {
                  sendJsonResponse(res, 404, {
                      "message" : "No reviews found"
                  });
              }
            }
          );
    //If request parameters didn't include eventid, send appropriate 404 response
    } else {
        sendJsonResponse(res, 404, {
            "message" : "Not found, eventid and reviewid both required"
        });
    }
};

/* Placeholder Update One Review for selected Event controller for API */
module.exports.reviewsUpdateOne = function (req, res) { };

/* Placeholder Delete One Review for selected Event controller for API */
module.exports.reviewsDeleteOne = function (req, res) { };