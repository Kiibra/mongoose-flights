import { Flight } from "../models/flight.js"

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}
function create(req, res){
  // redirect to all flights
  for (let key in req.body){
    if (req.body [key] === '') delete req.body[key]
  }
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
function edit(req, res){
  // find the flight by is flight._id (req.params.flightId)
  Flight.findById(req.params.flightId)
  .then(flight => {
    // render a edit view and 
    res.render('flights/edit', {
      flight: flight,
      title: 'Edit Flight'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function update (req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
  .then(flight => {
    // redirect to show view
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function createTicket (req, res){
   // find the flight (by _id)
  Flight.findById(req.params.flightId)
  .then(flight => {
    // create the ticket (by pushing into tickets array)
    flight.tickets.push(req.body)
    // save the flight document
    flight.save()
    .then(() => {
      // redirect to the show view
      res.redirect(`/flights/${req.params.flightId}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete, 
  show,
  edit,
  update,
  createTicket
}