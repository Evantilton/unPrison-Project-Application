const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "event"
    WHERE "id" = $1`;
    console.log('get in eventsPrograms.router was hit, req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch General query

router.put('/save', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsGeneral.router /save is:', req.body);
    const queryText = `UPDATE "event"
    SET 
    "last_date_contacted"=$1,
    "best_days_week"=$2, 
    "best_times"=$3, 
    "proposed_month"=$4, 
    "proposed_dates"=$5, 
    "confirmed_date"=$6, 
    "desired_focus"=$7, 
    "total_count"=$8, 
    "expected_attendance"=$9, 
    "room_location"=$10, 
    "actual_attendance"=$11, 
    "demographics"=$12, 
    "flyer_mailed"=$13, 
    "flyer_mailed_date"=$14, 
    "hear_about"=$15 

    WHERE "id" = $16`
    const queryValues = [
        req.body.last_date_contacted, 
        req.body.best_days_week,
        req.body.best_times,
        req.body.proposed_month,
        req.body.proposed_dates,
        req.body.confirmed_date,
        req.body.desired_focus,
        req.body.total_count,
        req.body.expected_attendance,
        req.body.room_location,
        req.body.actual_attendance,
        req.body.demographics,
        req.body.flyer_mailed,
        req.body.flyer_mailed_date,
        req.body.hear_about,
        req.body.id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in eventsGeneral.router:', error);
            res.sendStatus(500);
        })

})

module.exports = router;