'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BirdSchema = new Schema({
     name:{type:String},
    scientificName:{type:String},
    numberSpotted:{type:Number},
    dateObserved:{type:Date},
    location:{type:String},
    latitude:{type:Number},
    longitude:{type:Number}
});

module.exports = mongoose.model('Birds', BirdSchema);
