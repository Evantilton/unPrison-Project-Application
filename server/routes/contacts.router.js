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

router.post('/add/secondary/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "contacts" ("venue_id")
    VALUES ($1)`;
    console.log('in contacts.router post route, req.params.id is:', req.params.id);
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in contacts.router /add/secondary:', error);
        res.sendStatus(500);
    })
});

router.delete('/delete/secondary/:id', rejectUnauthenticated, async (req, res) => {
    const connection = await pool.connect();

    const queryText = `SELECT "venue_id" FROM "contacts"
    WHERE "id" = $1`;

    const queryTextTwo = `DELETE FROM "contacts"
    WHERE "id" = $1`;

    try {
        await connection.query('BEGIN;');
        const venueId = await connection.query(queryText, [req.params.id]);
        console.log('in contacts.router, this is venueId.rows variable in delete route:', venueId.rows);
        await connection.query(queryTextTwo, [req.params.id]);
        await connection.query('COMMIT;');

        res.send(venueId.rows);
    } catch (error) {
        await connection.query('ROLLBACK;');
        console.log('error in deleting secondary contact in contacts.router,', error);
        res.sendStatus(500);
    } finally {
        connection.release();
    }
});


module.exports = router;