/* GET Home Page */
module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Nowmapr - What\'s out there?',
        nowEvents: [{
            location: 'Arrow and Loon',
            eventType: 'pub',
            details: 'Trivia Night<br />7:30',
            lat: 45.4019,
            lon: -75.68739
        }, {
            location: 'RA Centre',
            eventType: 'fitness class',
            details: 'Fencing Classes<br />8:00',
            lat: 45.38182,
            lon: -75.68483
        }]
    });
};

//nowEvents GET method
//nowEvents.find
//res.render('index', {nowEvents: nowEvents});