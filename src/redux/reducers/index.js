import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import eventsReducer from './eventsReducer';
import eventsTravelReducer from './eventsTravelReducer';
import eventsFinancialsReducer from './eventsFinancialsReducer';
import eventsProgramsReducer from './eventsProgramsReducer';
import eventsGeneralReducer from './eventsGeneralReducer';
import venueReducer from './venueReducer';
import eventDetailsReducer from './eventDetailsReducer';
import venueDetailsReducer from './venueDetailsReducer';
import allUsers from './allUsers';
import eventsListForVenuesTabReducer from './eventsListForVenuesTabReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  eventsTravelReducer,
  eventsProgramsReducer,
  eventsFinancialsReducer,
  eventsGeneralReducer,
  eventDetailsReducer,
  venueReducer,
  venueDetailsReducer,
  eventsReducer, // data from events table in database
  allUsers,
  eventsListForVenuesTabReducer, // this is all the users
});

export default rootReducer;
