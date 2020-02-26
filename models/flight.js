const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const destSchema = new Schema ({
   airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
   },
   arrival: {
      type: Date
   }
})


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
        }},
   airport: {
        type: String,
        required: true,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
        
     },
     destinations: [destSchema]
 });

 module.exports = mongoose.model('Flight', flightSchema);