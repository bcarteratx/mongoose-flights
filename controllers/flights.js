const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flight/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights');
  });
}
