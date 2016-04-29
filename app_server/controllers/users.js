/* GET 'User Login' Page */
module.exports.userLogin = function(req, res) {
    res.render('index', {title: 'Nowmapr Login' });
};

/* GET 'User Home' Page */
//Replace 'index' with user landing page EJS stored in views
module.exports.userHome = function(req, res) {
    res.render('index', {title: 'My Account' });
};

/* GET 'User Settings' Page */
//Replace 'index' with user settings page EJS stored in views
module.exports.userSettings = function(req, res) {
    res.render('index', {title: 'My Settings' });
};

/* GET 'Set User Default Time' Page */
//Replace 'index' with user time period preference page EJS stored in views
module.exports.userDefaultTime = function(req, res) {
    res.render('index', {title: 'Set Events Timeframe' });
};

/* GET 'User Events' Page */
//Replace 'index' with user-created events listing page EJS stored in views
module.exports.userEvents = function(req, res) {
    res.render('index', {title: 'My Events' });
};

/* GET 'User Add Event' Page */
//Replace 'index' with user event generation page EJS stored in views
module.exports.userAddEvent = function(req, res) {
    res.render('index', {title: 'Add An Event' });
};