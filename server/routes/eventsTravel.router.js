const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "travel"
    WHERE "event_id" = $1`;
    console.log('get in eventsTravel.router was hit, req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch travel query

router.put('/save', rejectUnauthenticated, (req, res) => {
    const queryText = `UPDATE "travel"
    SET "nearest_airport" = $1
    "airport_code" = $2
    "flights_booked" = $3
    "flight_information" = $4
    "flight_departure" = $5
    "flight_return" = $6
    "hotel_booked" = $7
    "hotel_information" = $8
    "car_booked" = $9
    "car_information" = $10
    WHERE "event_id" = $11`
    const queryValues = [
        req.body.nearest_airport,
        req.body.airport_code,
        req.body.flights_booked,
        req.body.flight_information,
        req.body.flight_departure,
        req.body.flight_return,
        req.body.hotel_booked,
        req.body.hotel_information,
        req.body.car_booked,
        req.body.car_information,
        req.body.event_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in eventsTravel.router:', error);
            res.sendStatus(500);
        })

})




module.exports = router;