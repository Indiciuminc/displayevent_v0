/* GET 'Event Info' Page */
module.exports.eventInfo = function(req, res) {
    res.render('index', {title: 'Event Title' });
};

/* GET 'Event Info Reviews' Page */
module.exports.eventReviews = function(req, res) {
    res.render('index', {title: 'Event Title: Reviews' });
};

/* GET 'Add Review' Page */
module.exports.addReview = function(req, res) {
    res.render('index', {title: 'Add A Review' });
};