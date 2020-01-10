import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import eventsSaga from './eventsSaga';
import venueSaga from './venueSaga';
import eventsTravelSaga from './eventsTravelSaga';
import eventsFinancialsSaga from './eventsFinancialsSaga';
import eventsProgramsSaga from './eventsProgramsSaga';
import eventsGeneralSaga from './eventsGeneralSaga';
import getUsersSaga from './getUsersSaga';
import eventDetailsSaga from './eventDetailsSaga';
import venueDetailsSaga from './venueDetailsSaga';
import deleteUsersSaga from './deleteUsersSaga';
import deleteEventSaga from './deleteEventSaga';
import eventsListForVenuesTabSaga from './eventsListForVenuesTabSaga';
import contactsSaga from './contactsSaga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    eventsSaga(),
    getUsersSaga(),
    venueSaga(),
    eventDetailsSaga(),
    eventsTravelSaga(),
    eventsGeneralSaga(),
    eventsProgramsSaga(),
    eventsFinancialsSaga(),
    venueDetailsSaga(),
    deleteUsersSaga(),
    eventsListForVenuesTabSaga(),
    deleteUsersSaga(),
    contactsSaga(),
    deleteEventSaga(),
  ]);
}
