const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.get('/:id', (req, res) => {
    console.log("in get notes")
    const queryText = `SELECT * FROM "notes"
    WHERE "event_id" = $1`;
    console.log('get in eventsNotes.router was hit, req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch notes query

router.put('/save', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsNotes.router /save is:', req.body);
    const queryText = `UPDATE "notes"
    SET "prison_contribution"= $1, 
    
    WHERE "event_id" = $14`
    const queryValues = [
    req.body.prison_contribution, 
    
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in eventsNotes.router:', error);
            res.sendStatus(500);
        })

})



module.exports = router;