import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveGeneralTable(action) {
    try {
        yield axios.put('/api/events-general/save', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
}

function* fetchGeneralTable(action) {
    try{
        const response = yield axios.get(`/api/events-general/${action.payload}`);
        yield put({ type:'SET_GENERAL_TABLE', payload: response.data[0] });
    } catch (error) {
        console.log('error fetching general table', error);
    }
}

function* eventsGeneralSaga() {
    yield takeLatest('SAVE_EVENTS_GENERAL', saveGeneralTable); 
    yield takeLatest('FETCH_GENERAL_TABLE', fetchGeneralTable);
}

export default eventsGeneralSaga;