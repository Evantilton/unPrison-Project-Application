import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* eventsSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('POST_EVENTS', addEvents);
}

// worker Saga: will be fired on 'FETCH_EVENTS' actions
function* fetchEvents() {
    try {
        const response = yield axios.get('/api/events');
        yield put({ type: 'SET_EVENTS', payload: response.data });
    } catch (error) {
        console.log('error in eventsSaga, fetchEvents request failed with error:', error);
    }
}

function* addEvents(action){
    //sends inputted user value from Event component to server side post route
    try {
        yield axios.post('/api/events', action.payload.state);
        yield put({ type: 'FETCH_EVENTS', payload: action.payload })
    } catch (error) {
        console.log('error posting event', error);  
    }
}



export default eventsSaga;