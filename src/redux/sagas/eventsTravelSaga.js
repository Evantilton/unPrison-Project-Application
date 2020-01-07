import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* saveTravelTable(action) {
    try {
        yield axios.put('/api/events-travel/save', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
}

function* fetchTravelTable(action) {
    try{
        const response = yield axios.get(`/api/events-travel/${action.payload}`);
        yield put({ type:'SET_TRAVEL_TABLE', payload: response.data[0] });
    } catch (error) {
        console.log('error fetching travel table', error);
    }
}

function* eventsTravelSaga() {
    yield takeLatest('SAVE_EVENTS_TRAVEL', saveTravelTable); 
    yield takeLatest('FETCH_TRAVEL_TABLE', fetchTravelTable);
}

export default eventsTravelSaga;