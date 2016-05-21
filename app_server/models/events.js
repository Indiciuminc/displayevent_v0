var mongoose = require( 'mongoose' );

var reviewSchema = new mongoose.Schema({
    uName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

var eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        "default": Date.now,
        required: true
    },
    sT: {
        type: String,
        required: true
    },
    eT: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    coords: {
        type: [Number],
        index: '2dsphere',
        required: true
    },
    eventType: String,
    info: String,
    admis: String,
    cost: String,
    fee: String,
    faceb: String,
    insta: String,
    tweet: String,
    google: String,
    web: String,
    reviews: [reviewSchema]
});

mongoose.model('Event', eventSchema, 'events');