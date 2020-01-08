const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); // Sends user 403 status if they are not logged in

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText =

        `SELECT
    "public_event"."event_id",
    "public_event"."id",
    "public_event"."bio_sent",
    "public_event"."public_event_date_emailed",
    "public_event"."public_questionnaire_sent",
    "public_event"."date_questionaire_sent",
    "public_event"."date_questionaire_returned",
    "public_event"."other_information",
    "public_event"."book_signing", 
    "public_event"."book_sales",
    "public_event"."total_prison_baby_needed",
    "public_event"."who_orders_books", 
    "public_event"."books_carryon", 
    "public_event"."books_shipped",
    
    "reading_glasses"."glasses_participating", 
    "reading_glasses"."est_number_partipating",
    "reading_glasses"."est_population_over_forty", 
    "reading_glasses"."number_glasses_donated", 
    "reading_glasses"."number_glasses_shipped", 
    "reading_glasses"."number_glasses_delivered", 
    "reading_glasses"."date_glasses_shipped", 
    "reading_glasses"."date_glasses_delivered",
    "reading_glasses"."received_form", 
    "reading_glasses"."glasses_one_half",
    "reading_glasses"."glasses_two", 
    "reading_glasses"."glasses_two_half", 
    "reading_glasses"."glasses_three",
    
    
    "childrens_books"."books_participating", 
    "childrens_books"."average_age_range", 
    "childrens_books"."child_form_sent", 
    "childrens_books"."child_form_date_emailed", 
    "childrens_books"."child_form_date_returned", 
    "childrens_books"."total_mothers_participating", 
    "childrens_books"."total_children_participating", 
    "childrens_books"."total_books_needed", 
    "childrens_books"."books_carryon", 
    "childrens_books"."books_shipped", 
    "childrens_books"."program_completed",
    "childrens_books"."prison_prison_baby_donation" 
      
       
     FROM "public_event"
            INNER JOIN "reading_glasses" ON "reading_glasses"."event_id" = $1
            INNER JOIN "childrens_books" ON "childrens_books"."event_id" = $1
            WHERE "public_event"."event_id" = $1;`
    console.log('get in eventsPrograms.router was hit, req.params.id:', req.params.id);
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows)
        })
        .catch(() => {
            res.sendStatus(500);
        })
}) // end fetch programs query

router.put('/reading_glasses', rejectUnauthenticated, (req, res) => {
    console.log('req.body in eventsPrograms.router /reading_glasses is:', req.body);
    const queryText = `UPDATE "reading_glasses"
    SET 
    "glasses_participating"= $1,
    "est_number_partipating"= $2,
    "est_population_over_forty"= $3,
    "number_glasses_donated"= $4,
    "number_glasses_shipped"= $5,
    "number_glasses_delivered"= $6,
    "date_glasses_shipped"= $7,
    "date_glasses_delivered"= $8,
    "received_form"= $9,
    "glasses_one_half"= $10,
    "glasses_two"= $11,
    "glasses_two_half"= $12,
    "glasses_three"= $13
    
    WHERE "event_id"= $14`
    const queryValues = [
    req.body.glasses_participating,
    req.body.est_number_partipating,
    req.body.est_population_over_forty,
    req.body.number_glasses_donated,
    req.body.number_glasses_shipped,
    req.body.number_glasses_delivered,
    req.body.date_glasses_shipped,
    req.body.date_glasses_delivered,
    req.body.received_form,
    req.body.glasses_one_half,
    req.body.glasses_two,
    req.body.glasses_two_half,
    req.body.glasses_three,
    req.body.event_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            console.log("no errors reading glasses update")
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT route in events-programs,reading_glasses', error);
            res.sendStatus(500);
        })

})

module.exports = router;