var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var citySchema = Schema({
    name     : String,
    
});

var stateSchema = Schema({
    name: String,
    
    interests: [interestsSchema],
    eventsAttended: [{ type: Schema.Types.ObjectId, ref: 'state' }]
});

var city  = mongoose.model('city', eventSchema);
var state = mongoose.model('state', personSchema);