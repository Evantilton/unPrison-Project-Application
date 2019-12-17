const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // SQL Query to return all venues
    const query = `SELECT * FROM venue
    JOIN "contacts" ON "contacts"."venue_id" = "venue"."id"`;

    pool.query(query)
    .then((response) => {
        console.log('SELECT ALL venues reponse', response);
        res.send(response.rows)  
    })
    .catch((error) => {
        console.log('SELECT ALL venues error', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;