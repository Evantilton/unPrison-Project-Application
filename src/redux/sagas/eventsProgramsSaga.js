import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveProgramsTable(action) {
    try {
        yield axios.put('/api/programsTab/childrens_books', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
    try {
        yield axios.put('/api/events-programs/reading_glasses', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
    try {
        yield axios.put('/api/programsTabEvent/public_event', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
}

function* fetchProgramsTable(action) {
    try{
        const response = yield axios.get(`/api/events-programs/${action.payload}`);
        yield put({ type:'SET_PROGRAMS_TABLE', payload: response.data[0] });
    } catch (error) {
        console.log('error fetching programs table', error);
    }
}

function* eventsProgramsSaga() {
    yield takeLatest('SAVE_EVENTS_PROGRAMS', saveProgramsTable); 
    yield takeLatest('FETCH_PROGRAMS_TABLE', fetchProgramsTable);
}

export default eventsProgramsSaga;