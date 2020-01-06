import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editGeneralTable(action) {
    try {
        const response = yield axios.put('/api/events-general/edit', action.payload );
        yield put({ type:'FETCH_GENERAL_TABLE', payload: response.data });
    } catch (error) {
        console.log('error fetching general', error);
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
    yield takeLatest('EDIT_GENERAL_TABLE', editGeneralTable); 
    yield takeLatest('FETCH_GENERAL_TABLE', fetchGeneralTable);
}

export default eventsGeneralSaga;