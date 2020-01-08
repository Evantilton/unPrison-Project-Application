const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in




router.put('/public_event', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsPrograms.router /public_event is:', req.body);
    const queryText = `UPDATE "public_event"
    SET 
    "bio_sent" = $1,
    "public_event_date_emailed"= $2,
    "public_questionnaire_sent"= $3,
    "date_questionaire_sent"= $4,
    "date_questionaire_returned"= $5,
    "other_information"= $6,
    "book_signing"= $7,
    "book_sales"= $8,
    "total_prison_baby_needed"= $9,
    "who_orders_books"= $10,
    "books_carryon"= $11,
    "books_shipped"= $12
    
    WHERE "event_id"= $13`
    const queryValues = [
        req.body.bio_sent,
        req.body.public_event_date_emailed,
        req.body.public_questionnaire_sent,
        req.body.date_questionaire_sent,
        req.body.date_questionaire_returned,
        req.body.other_information,
        req.body.book_signing,
        req.body.book_sales,
        req.body.total_prison_baby_needed,
        req.body.who_orders_books,
        req.body.books_carryon,
        req.body.books_shipped,

        req.body.event_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in eventsPublicEvent', error);
            res.sendStatus(500);
        })

})


module.exports = router;