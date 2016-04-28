/* GET 'User Login' Page */
module.exports.userLogin = function(req, res) {
    res.render('index', {title: 'Nowmapr Login' });
};

/* GET 'User Home' Page */
module.exports.userHome = function(req, res) {
    res.render('index', {title: 'My Account' });
};

/* GET 'User Settings' Page */
module.exports.userSettings = function(req, res) {
    res.render('index', {title: 'My Settings' });
};

/* GET 'Set User Default Time' Page */
module.exports.userDefaultTime = function(req, res) {
    res.render('index', {title: 'Set Events Timeframe' });
};

/* GET 'User Events' Page */
module.exports.userEvents = function(req, res) {
    res.render('index', {title: 'My Events' });
};

/* GET 'User Add Event' Page */
module.exports.userAddEvent = function(req, res) {
    res.render('index', {title: 'Add An Event' });
};