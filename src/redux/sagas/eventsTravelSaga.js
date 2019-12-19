import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editTravelTable(action) {
    try {
        const response = yield axios.put('/api/events-travel/edit', action.payload );
        yield put({ type:'FETCH_TRAVEL_TABLE', payload: response.data });
    } catch (error) {
        console.log('error fetching venues', error);
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
    yield takeLatest('EDIT_TRAVEL_TABLE', editTravelTable); 
    yield takeLatest('FETCH_TRAVEL_TABLE', fetchTravelTable);
}

export default eventsTravelSaga;