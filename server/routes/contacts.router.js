const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params in contacts.router.js get route:', req.params);
    const queryText = `
                SELECT * FROM contacts
                WHERE venue_id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
        }).catch((error) => {
            console.log('Error in GET contacts for one venue', error);
            res.sendStatus(500);
        })
});


module.exports = router;