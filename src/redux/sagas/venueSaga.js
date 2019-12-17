import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* venueSaga() {
    yield takeLatest('POST_VENUE', createVenue);
   
}

function* createVenue(action){
    //sends inputted user value to server side post route
    try {
        yield axios.post('/api/venue', action.payload);
    } catch (error) {
        console.log('error posting venue', error);  
    }
}

export default venueSaga;