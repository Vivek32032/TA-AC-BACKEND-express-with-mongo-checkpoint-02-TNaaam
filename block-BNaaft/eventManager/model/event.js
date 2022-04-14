var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title : String,
    summary : String,
    host : String,
    start_date : Date,
    end_date : Date, 
    event_category : [String],
    location : String,
    likes : {type : Number, default : 0}
    
},{timestamps : true})

var Event = mongoose.model("Event",eventSchema);

module.exports = Event