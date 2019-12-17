const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {

// });
router.get('/', (req, res) => {
  const queryText = 'SELECT "id","username" FROM "user" WHERE "is_admin" = $1';
  pool.query(queryText, [false])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT users query', err);
      res.sendStatus(500);
    });
});



/**
 * POST route template
 */


module.exports = router;