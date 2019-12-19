const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT "id","username" FROM "user" WHERE "is_admin" = $1';
  pool.query(queryText, [false])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT users query', err);
      res.sendStatus(500);
    });
});

router.delete('/delete/:id', (req, res) => {
  pool.query('DELETE FROM "user" WHERE "id"= $1', [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE route of users', error);
      res.sendStatus(500);
  })
});

module.exports = router;