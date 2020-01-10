const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // SQL Query to return all venues
    const query = `SELECT * FROM venue
    JOIN "contacts" ON "contacts"."venue_id" = "venue"."id"`;
    pool.query(query)
        .then((response) => {
            console.log('from venue.router.js response to GET route:', response.rows);
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('SELECT ALL venues error', error);
            res.sendStatus(500);
        })
});


// get venue that matches param of venue-details page
router.get('/one/:id', rejectUnauthenticated, (req, res) => {
    console.log('venue details', req.params);
    const queryText = `
                SELECT * FROM venue 
                JOIN "contacts" ON "contacts"."venue_id" = "venue"."id"
                WHERE venue.id=$1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            // console.log('get route details', result);

            res.send(result.rows);
            console.log(result.rows);

        }).catch((error) => {
            console.log('Error in GET venue details', error);
            res.sendStatus(500);
        })
})

router.get('/events-tab/:id', rejectUnauthenticated, (req, res) => {
    console.log('events list in venues tab', req.params);
    const queryText = `
                SELECT * FROM event
                WHERE venue_id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        }).catch((error) => {
            console.log('Error in GET events for one venue', error);
            res.sendStatus(500);
        })
})

router.post('/', rejectUnauthenticated, async (req, res) => {
    // takes user inputted data from venue component and adds to venue table in database, 
    // then returns venue id and adds it to contacts table plus the second user inputted information
    const connection = await pool.connect();
    let result;
    const newVenue = req.body;
    const queryText = `INSERT INTO venue ("name", "venue_type")
                      VALUES ($1, $2) RETURNING "id"`;
    const queryValues = [
        newVenue.venue.name,
        newVenue.venue.venue_type,
    ];
    const queryTextContact = `INSERT INTO contacts ("venue_id", "contact_name", "is_primary")
                            VALUES ($1, $2, $3)`
    try {
        await connection.query('BEGIN;');
        result = await connection.query(queryText, queryValues)
        const venueIdContact = result.rows[0].id
        await connection.query(queryTextContact, [venueIdContact, newVenue.contact.contact_name, newVenue.contact.is_primary])
        await connection.query('COMMIT;');
        console.log('reached commit without error');

        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK;');
        res.sendStatus(500);
    } finally {
        connection.release();
    }
});


router.put('/save-contacts', rejectUnauthenticated, (req, res) => {
    console.log('req.body in save contacts is:', req.body);
    const queryText = `UPDATE "contacts"
    SET "contact_name" = $1,
    "contact_phone" = $2,
    "contact_email" = $3,
    "position" = $4,
    "is_primary" = $5
    WHERE "id" = $6;`;
    const queryValues = [
        req.body.contact_name,
        req.body.contact_phone,
        req.body.contact_email,
        req.body.position,
        req.body.is_primary,
        req.body.id
    ] 
    pool.query(queryText, queryValues)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in PUT route in venues details for contacts router:', error);
        res.sendStatus(500);
    })
})

router.put('/save-venue', rejectUnauthenticated, (req, res) => {
    console.log('req.body in save venue is:', req.body);
    const queryText = `UPDATE "venue"
    SET "name" = $1,
    "street_address" = $2,
    "city" = $3,
    "state" = $4,
    "country" = $5,
    "zip" = $6,
    "venue_type" = $7
    WHERE "id" = $8;`;
    const queryValues = [
        req.body.name,
        req.body.street_address,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.zip,
        req.body.venue_type,
        req.body.venue_id
    ] 
    pool.query(queryText, queryValues)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in PUT route in venues details for contacts router:', error);
        res.sendStatus(500);
    })
})

// router.delete('/delete/:id', rejectUnauthenticated (req, res) => {
//     const queryText = `DELETE FROM "venue"`

// })

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "venue"
    WHERE "id"=$1`;
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in deleting venue in venue.router.js:', error);
            res.sendStatus(500);
        })
})



module.exports = router;