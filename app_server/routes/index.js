var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlUsers = require('../controllers/users');
var ctrlEvents = require('../controllers/events');

/* GET home page. */
router.get('/', ctrlMain.index);

/* User Pages */
router.get('/users/login', ctrlUsers.userLogin);
router.get('/users', ctrlUsers.userHome);
router.get('/users/settings', ctrlUsers.userSettings);
router.get('/users/settings/time', ctrlUsers.userDefaultTime);
router.get('/users/settings/myevents', ctrlUsers.userEvents);
router.get('/users/settings/myevents/new', ctrlUsers.userAddEvent);

/* Event Pages */
router.get('/events/info', ctrlEvents.eventInfo);
router.get('/events/info/reviews', ctrlEvents.eventReviews);
router.get('/events/info/reviews/new', ctrlEvents.addReview);

module.exports = router;