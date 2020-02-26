const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = mongoose.Schema;
 
 const flightSchema = new Schema({
 	airline: {
        type: String,
        required: true,
        enum: ["United", "Southwest", "Delta"]
     },
 	flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
     },
 	departs: {
        type: Date,
        default: function() {
           let redate = new Date();
           redate. setFullYear(redate.getFullYear()=1)
           return redate();
        }}
 });

 module.exports = mongoose.model('Flight', flightSchema);