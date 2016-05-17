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
        }, {
            location: 'Absolute Comedy',
            eventType: 'night life',
            details: 'Open Mic Night<br />7:30',
            lat: 45.40073,
            lon: -75.70992
        }, {
            location: 'Lansdowne Park',
            eventType: 'concert',
            details: 'The Piano Guys<br />May 14<br />7:00',
            lat: 45.39875,
            lon: -75.68386
        }, {
            location: 'Jesse\'s Girl\'s Place',
            eventType: 'party',
            details: 'THE BIGGEST PARTY<br />6:00',
            lat: 45.34514,
            lon: -75.76981
        }, {
            location: 'Centrepointe Theatre',
            eventType: 'arts',
            details: 'Community Theatre Production of Rocky Horror<br />8:30',
            lat: 45.34446,
            lon: -75.76221
        }]
    });
};

//nowEvents GET method
//nowEvents.find
//res.render('index', {nowEvents: nowEvents});