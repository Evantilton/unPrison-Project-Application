import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* venueDetailsSaga() {
    yield takeLatest('GET_ONE_VENUE', getDetailsVenue);
    yield takeLatest('SAVE_VENUES_GENERAL', saveVenueDetailsGeneral);
}

function* getDetailsVenue(action){
    //sends inputted user value to server side post route
    console.log('details saga', action);
    
    try {
        const venueDetailsResponse = yield axios.get(`/api/venue/one/${action.payload}`);
        yield put({type: 'SET_VENUE_DETAILS', payload: venueDetailsResponse.data[0]})
    } catch (error) {
        console.log('error getting venue details', error);  
    }
}

function* saveVenueDetailsGeneral(action) {
    console.log('save venue details reducer', action);

    try {
        yield axios.put('/api/venue/save');
    } catch (error) {
        console.log('error saving venue details and general tab', error);
        
    }
    
}

export default venueDetailsSaga;