//Use Request to hook App/Site page calls into API
var request = require('request');
var apiOptions = {
    server : "https://display-event-v-j-epeecurean.c9users.io"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://display-event-v-j-epeecurean.c9users.io";
}

//Function to Render data on the Homepage 'Index'
var renderHomepage = function(req, res, responseBody) {
   res.render('index', {
        title: 'Nowmapr - What\'s out there?',
        nowEvents: responseBody
    });
};

/* GET Home Page */
module.exports.index = function(req, res) {
    //Create variables to hold Request options and URL to API call
    var requestOptions, path;
    path = '/api';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        //Query string parameters - lat/lng from mobile location, other settings retrieved from user-definitions later
        qs : {
            lng : -75.688323,
            lat : 45.403071,
            maxDistance : 5
        }
    };
    request(
        requestOptions,
        function(err, response, body) {
            renderHomepage(req, res, body);
        }
    );
};

//nowEvents GET method
//nowEvents.find
//res.render('index', {nowEvents: nowEvents});