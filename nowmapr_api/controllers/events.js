/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Create Event controller for API */
module.exports.eventsCreate = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};