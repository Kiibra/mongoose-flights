import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}
function create(req, res){
  // redirect to all flights
  // for (let key in req.body){
  //   if (req.body [key] === '') delete req.body[key]
  // }
  Flight.create(req.body)
  .then(movie => {
    // redirect somewhere
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
// list all flights with flight's airline, airport, flightNo, and departure date/time
  Flight.find({})
  .then(flights => {
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
function show (req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: 'Flight Detail'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteFlight (req, res){
  // find a flight and delete a flight
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    // redirect back to index view
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete, 
  show,
}