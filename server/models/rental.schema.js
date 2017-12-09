var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create a new Schema for listing
var rentingSchema = new Schema({
    rent: { type: Number, required: true},
    sqft: { type: Number },
    city: { type: String }
});

module.exports = mongoose.model('Renting', rentingSchema);