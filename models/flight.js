import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN' ],
    default: ['DEN']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    Default: function() {
    let newDate = new Date()
    let ajustedYear = newDate.setFullYear(new Date()).setFullYear(newDate + 1)
      return ajustedYear
    },
  },

}, {
  timestamps: true
})



const Flight = mongoose.model('Flight', flightSchema )

export {
  Flight
}