import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* contactsSaga() {
    yield takeLatest('FETCH_CONTACTS', fetchContacts);
}

function* fetchContacts(action) {
    try {
        const contactsResponse = yield axios.get(`/api/contacts/${action.payload}`);
        yield put({ type: 'SET_CONTACTS', payload: contactsResponse.data });
    } catch (error) {
        console.log('error fetching contacts for venue', error);
    }
}

export default contactsSaga;