import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ( {
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN' ],
    default: ['DEN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    Default: function() {
    newDate = new Date(),
    ajustedYear = newDate.setFullYear(new Date()).newDate().setFullYear( + 1)
      return ajustedYear
    },
  },

}, {
  timestamps: true
})



const Flight = mongoose.model('Flight', FlightSchema )

export {
  Flight
}