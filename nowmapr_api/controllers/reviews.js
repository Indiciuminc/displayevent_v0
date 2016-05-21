/*Utility function accepting response object, status code, and data */
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/*Placeholder Create Review controller for API */
module.exports.reviewsCreate = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};