import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* eventDetailsSaga() {
    yield takeLatest('FETCH_CURRENT_EVENT', getDetailsEvent);
}

function* getDetailsEvent(action){
    //sends inputted user value to server side post route
    console.log('details saga', action);
    
    try {
        const eventDetailsResponse = yield axios.get(`/api/events/${action.payload}`);
        yield put({type: 'SET_EVENT_DETAILS', payload: eventDetailsResponse.data[0]});
        yield put({ type: 'GET_ONE_VENUE', payload: eventDetailsResponse.data[0].venue_id});
    } catch (error) {
        console.log('error getting venue details', error);  
    }
}

export default eventDetailsSaga;