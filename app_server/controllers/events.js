/* GET 'Event Info' Page */
module.exports.eventInfo = function(req, res) {
    res.render('event-info', {title: 'Event Title' });
};

/* GET 'Event Info Reviews' Page */
//Replace 'index' with event reviews listing page EJS stored in views
module.exports.eventReviews = function(req, res) {
    res.render('index', {title: 'Event Title: Reviews' });
};

/* GET 'Add Review' Page */
//Replace 'index' with user review generation page EJS stored in views
module.exports.addReview = function(req, res) {
    res.render('index', {title: 'Add A Review' });
};