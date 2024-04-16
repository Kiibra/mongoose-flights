import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function index(req, res) {
// list all flights with flight's airline, airport, flightNo, and departure date/time
  Flight.find({})
  .then(flight => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export {
  index,
  newFlight as new,
}