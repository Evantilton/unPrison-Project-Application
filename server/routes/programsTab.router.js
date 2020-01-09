const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.put('/childrens_books', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsPrograms.router /childrens_books is:', req.body);
    const queryText = `UPDATE "childrens_books"
    SET 
    "books_participating" = $1, 
    "average_age_range"= $2, 
    "child_form_sent"= $3, 
    "child_form_date_emailed"= $4, 
    "child_form_date_returned"= $5, 
    "total_mothers_participating"= $6, 
    "total_children_participating"= $7, 
    "total_books_needed"= $8, 
    "books_carryon"= $9, 
    "books_shipped"= $10, 
    "program_completed"= $11, 
    "prison_prison_baby_donation"= $12 
    
    WHERE "event_id"= $13`
    const queryValues = [
    req.body.books_participating,
    req.body.average_age_range, 
    req.body.child_form_sent,
    req.body.child_form_date_emailed, 
    req.body.child_form_date_returned,
    req.body.total_mothers_participating,
    req.body.total_children_participating,
    req.body.total_books_needed, 
    req.body.books_carryon, 
    req.body.books_shipped,
    req.body.program_completed,
    req.body.prison_prison_baby_donation,
    
    req.body.event_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            console.log("no errors in Childrens' Book update")
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in Childrens Books update', error);
            res.sendStatus(500);
        })

})


module.exports = router;