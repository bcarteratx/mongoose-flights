const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    newTicket,
}

function newTicket(req, res) {
    console.log(req.body);
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, tickets){
        console.log(tickets);
        res.redirect(`/flights/${req.params.id}`);

    })
};