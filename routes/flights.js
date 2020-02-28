const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/edit', flightsCtrl.showUpdate);
//router.get('/:id', flightsCtrl.update);
router.post('/', flightsCtrl.create);
router.get('/:id/tickets/', flightsCtrl.showTicket);


module.exports = router;