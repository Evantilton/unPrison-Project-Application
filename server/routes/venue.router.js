const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    // SQL Query to return all venues
    const query = `SELECT * FROM "venue"
    ORDER BY "name" ASC`;
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
                SELECT * FROM "venue"
                WHERE "id" = $1`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);

        }).catch((error) => {
            console.log('Error in GET venue details', error);
            res.sendStatus(500);
        })
});

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
});

router.post('/', rejectUnauthenticated, (req, res) => {
    // takes user inputted data from venue component and adds to venue table in database, 
    // then returns venue id and adds it to contacts table plus the second user inputted information
    const newVenue = req.body;
    const queryText = `INSERT INTO venue ("name", "venue_type", "contact_name_one")
                      VALUES ($1, $2, $3)`;
    const queryValues = [
        newVenue.name,
        newVenue.venue_type,
        newVenue.contact_name_one
    ];
    
    pool.query(queryText, queryValues)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in post route for a new venue in venue.router,', error);
    })
});

router.put('/save-venue', rejectUnauthenticated, (req, res) => {
    console.log('req.body in save venue is:', req.body);
    const queryText = `UPDATE "venue"
    SET "name" = $1,
    "street_address" = $2,
    "city" = $3,
    "state" = $4,
    "country" = $5,
    "zip" = $6,
    "venue_type" = $7,
    "contact_name_one" = $8,
    "contact_phone_one" = $9,
    "contact_email_one" = $10,
    "contact_position_one" = $11,
    "contact_name_two" = $12,
    "contact_phone_two" = $13,
    "contact_email_two" = $14,
    "contact_position_two" = $15,
    "contact_name_three" = $16,
    "contact_phone_three" = $17,
    "contact_email_three" = $18,
    "contact_position_three" = $19,
    "contact_name_four" = $20,
    "contact_phone_four" = $21,
    "contact_email_four" = $22,
    "contact_position_four" = $23
    WHERE "id" = $24;`;
    const queryValues = [
        req.body.name,
        req.body.street_address,
        req.body.city,
        req.body.state,
        req.body.country,
        req.body.zip,
        req.body.venue_type,
        req.body.contact_name_one,
        req.body.contact_phone_one,
        req.body.contact_email_one,
        req.body.contact_position_one,
        req.body.contact_name_two,
        req.body.contact_phone_two,
        req.body.contact_email_two,
        req.body.contact_position_two,
        req.body.contact_name_three,
        req.body.contact_phone_three,
        req.body.contact_email_three,
        req.body.contact_position_three,
        req.body.contact_name_four,
        req.body.contact_phone_four,
        req.body.contact_email_four,
        req.body.contact_position_four,
        req.body.id
    ];
    pool.query(queryText, queryValues)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in PUT route in venues details in venue.router:', error);
        res.sendStatus(500);
    })
});

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params.id)
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
});



module.exports = router;