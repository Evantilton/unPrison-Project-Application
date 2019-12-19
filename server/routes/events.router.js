const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

// Database query to fetch all data from 'event' table
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "event"`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch events query


router.post('/', rejectUnauthenticated, (req, res) => {
    // adds the venue id, from drop down list in events component, to event table in database
    
    const newEvent = req.body;
    const queryText = `INSERT INTO event ("venue_id")
                      VALUES ($1)`;
    const queryValues = [
        newEvent.venue_id, 
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT event query', err);
            res.sendStatus(500);
        });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "event"
    WHERE "id" = $1`;
    console.log('get single event req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch events query


module.exports = router;