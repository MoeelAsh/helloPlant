
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var flowers = new Schema({
    botanicalName: {
        type:String,
    },
    
    plantType:{
        type:String,
    },
    sunExposure: {
        type:String,
    },
    soilPH: {
        type:String,
    },
    bloomTime: {
        type:String,
    },
    flowerColor: {
        type:Array,
    },
    zone: {
        type:Array,
    },
    specialFeatures: {
        type:Array,
    },
    height: {
        type:String,
    },
    width:{
        type:String
    }
});

mongoose.model('flowers', flowers );


