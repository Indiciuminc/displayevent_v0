var mongoose = require( 'mongoose' );

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
    info: String,
    admis: String,
    cost: String,
    fee: String,
    faceb: String,
    insta: String,
    tweet: String,
    google: String,
    web: String,
});