var express = require('express');
var router = express.Router();
//var ctrlUsers = require('../controllers/users'); //Don't think we need API router/controller for User. Will be taken care of in login code
var ctrlEvents = require('../controllers/events');
var ctrlReviews = require('../controllers/reviews');

//Routes for Users
//router.get('/users', ctrlUsers.userHome);

//Routes for Events
//router.get('/', ctrlEvents.eventsListByDistance);
router.post('/events', ctrlEvents.eventsCreate);
router.get('/events/:eventid', ctrlEvents.eventsReadOne);
router.put('/events/:eventid', ctrlEvents.eventsUpdateOne);
router.delete('/events/:eventid', ctrlEvents.eventsDeleteOne);

//Routes for Reviews
router.get('/events/:eventid/reviews', ctrlReviews.reviewsListByEventid);
router.post('/events/:eventid/reviews', ctrlReviews.reviewsCreate);
router.get('/events/:eventid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/events/:eventid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/events/:eventid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;