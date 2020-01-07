import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editProgramsTable(action) {
    try {
        const response = yield axios.put('/api/events-programs/edit', action.payload );
        yield put({ type:'FETCH_PROGRAMS_TABLE', payload: response.data });
    } catch (error) {
        console.log('error fetching programs', error);
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
    yield takeLatest('EDIT_PROGRAMS_TABLE', editProgramsTable); 
    yield takeLatest('FETCH_PROGRAMS_TABLE', fetchProgramsTable);
}

export default eventsProgramsSaga;