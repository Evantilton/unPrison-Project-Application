import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* eventsListForVenuesTabSaga() {
    yield takeLatest('GET_EVENTS_FOR_SPECIFIC_VENUE', getEventsForOneVenue);
}

function* getEventsForOneVenue(action){
    //sends inputted user value to server side post route
    console.log('events tab in venues', action);
    
    try {
        const eventsForOneVenue = yield axios.get(`/api/venue/events-tab/${action.payload}`);
        yield put({type: 'SET_EVENTS_FOR_ONE_VENUE', payload: eventsForOneVenue.data})
        console.log(eventsForOneVenue.data);
        
    } catch (error) {
        console.log('error getting events for one venue', error);  
    }
}

export default eventsListForVenuesTabSaga;