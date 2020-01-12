import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* contactsSaga() {
    yield takeLatest('FETCH_CONTACTS', fetchContacts);
    yield takeLatest('ADD_SECONDARY_CONTACT', addSecondaryContact);
    yield takeLatest('DELETE_SECONDARY_CONTACT', deleteSecondaryContact);
    yield takeLatest('MARK_CONTACT_AS_PRIMARY', markContactPrimary);
    yield takeLatest('SAVE_VENUES_CONTACTS', saveVenueDetailsContacts);
}

function* fetchContacts(action) {
    try {
        const contactsResponse = yield axios.get(`/api/contacts/${action.payload}`);
        yield put({ type: 'SET_CONTACTS', payload: contactsResponse.data });
        // yield put({ type: 'SET_SECONDARY_CONTACTS', payload: contactsResponse.data });
    } catch (error) {
        console.log('error fetching contacts for venue in contactsSaga', error);
    }
}

function* addSecondaryContact(action) {
    try {
        yield axios.post(`/api/contacts/add-secondary/${action.payload}`);
        yield put({ type: 'FETCH_CONTACTS', payload: action.payload });
    } catch (error) {
        console.log('error adding secondary contact in contactsSaga,', error);
    }
}

function* deleteSecondaryContact(action) {
    try {
        const contactsResponse = yield axios.delete(`/api/contacts/delete-secondary/${action.payload}`);
        console.log('in contactsSaga this is contactsResponse of delete route:', contactsResponse);
        yield put({ type: 'FETCH_CONTACTS', payload: contactsResponse.data[0].venue_id });
    } catch (error) {
        console.log('error deleting secondary contact in contactsSaga,', error);
    }
}

function* markContactPrimary(action) {
    try {
        yield axios.put(`/api/contacts/mark-primary/${action.payload.contactId}`, action.payload);
        // console.log('in contactsSaga markContactPrimary, markPrimaryResponse.data is:', markPrimaryResponse.data);
        yield put({ type: 'GET_ONE_VENUE',  payload: action.payload.venueId });
    } catch (error) {
        console.log('error in marking a secondary contact as the primary contact in contactsSaga,', error);
    }
}

function* saveVenueDetailsContacts(action) {
    console.log('save venue details contacts in contactsSaga, action is:', action);
    try {
        yield axios.put('/api/contacts/save-contacts', action.payload);
    } catch (error) {
        console.log('error saving venue details contacts tab in contactsSaga,', error);
    }
}

export default contactsSaga;