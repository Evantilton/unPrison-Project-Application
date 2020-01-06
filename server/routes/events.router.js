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


router.post('/add', rejectUnauthenticated, async (req, res) => {
    // adds the venue id, from drop down list in events component, to event table in database
    console.log('in events.router req.body is:', req.body);
    
    const connection = await pool.connect();

    try {
        await connection.query('BEGIN;');

        const queryText = `INSERT INTO event ("venue_id")
                      VALUES ($1)
                      RETURNING "id"`;

        result = await connection.query(queryText,[req.body.venue_id]);
        eventId = [result.rows[0].id];
        console.log('eventId in events.router.js post route is:', eventId);
        travelQueryText = `INSERT INTO "travel" ("event_id")
        VALUES ($1)`;
        await connection.query(travelQueryText, eventId);
        publicEventQueryText = `INSERT INTO "public_event" ("event_id")
        VALUES ($1)`;
        await connection.query(publicEventQueryText, eventId);
        financialsQueryText = `INSERT INTO "financials" ("event_id")
        VALUES ($1)`;
        await connection.query(financialsQueryText, eventId);
        readingGlassesQueryText = `INSERT INTO "reading_glasses" ("event_id")
        VALUES ($1)`;
        await connection.query(readingGlassesQueryText, eventId);
        childrensBooksQueryText = `INSERT INTO "childrens_books" ("event_id")
        VALUES ($1)`;
        await connection.query(childrensBooksQueryText, eventId);

        await connection.query('COMMIT;');
        console.log('reached commit without error');
        
        res.sendStatus(201);
    } catch (error ){
        await connection.query('ROLLBACK;');
        res.sendStatus(500);
    } finally {
        connection.release();
    }
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