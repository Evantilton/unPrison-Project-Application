
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const eventsRouter = require('./routes/events.router');
const usersRouter = require('./routes/users.router');
const venueRouter = require('./routes/venue.router');
const eventsTravelRouter = require('./routes/eventsTravel.router');
const eventsGeneralRouter = require('./routes/eventsGeneral.router');
const eventsFinancialsRouter = require('./routes/eventsFinancials.router');
const programsTabEventRouter = require('./routes/programsTabEvent.router');
const eventsProgramsRouter = require('./routes/eventsPrograms.router');
const programsTabRouter = require('./routes/programsTab.router');
const contactsRouter = require('./routes/contacts.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/events', eventsRouter);
app.use('/api/events-travel', eventsTravelRouter);
app.use('/api/events-general', eventsGeneralRouter);
app.use('/api/events-financials', eventsFinancialsRouter);
app.use('/api/events-programs', eventsProgramsRouter);
app.use('/api/programsTabEvent', programsTabEventRouter);
app.use('/api/programsTab', programsTabRouter);
app.use('/users',  usersRouter);
app.use('/api/venue', venueRouter);
app.use('/api/contacts', contactsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
