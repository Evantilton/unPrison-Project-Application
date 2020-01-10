const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "financials"
    WHERE "event_id" = $1`;
    console.log('get in eventsFinancials.router was hit, req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch financials query

router.put('/save', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsFinancials.router /save is:', req.body);
    const queryText = `UPDATE "financials"
    SET "prison_contribution"= $1, 
    "public_event_fee_paid" = $2,
    "public_event_donations" = $3,
    "expenses_travel" = $4,
    "expenses_air" = $5,
    "expenses_hotel" = $6,
    "expenses_car" = $7,
    "expenses_meals" = $8,
    "expenses_supplies" = $9,
    "expenses_printing" = $10,
    "expenses_purchases" = $11,
    "expenses_prep_time_costs" = $12,
    "expenses_staffing_consultants" = $13,
    "financials_notes"=$14
    WHERE "event_id" = $15`
    const queryValues = [
    req.body.prison_contribution, 
    req.body.public_event_fee_paid,
    req.body.public_event_donations,
    req.body.expenses_travel,
    req.body.expenses_air,
    req.body.expenses_hotel,
    req.body.expenses_car,
    req.body.expenses_meals,
    req.body.expenses_supplies,
    req.body.expenses_printing,
    req.body.expenses_purchases,
    req.body.expenses_prep_time_costs,
    req.body.expenses_staffing_consultants,
    req.body.financials_notes,
    req.body.event_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in eventsFinancials.router:', error);
            res.sendStatus(500);
        })

})



module.exports = router;