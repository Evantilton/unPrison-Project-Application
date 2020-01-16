import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* venueDetailsSaga() {
    yield takeLatest('GET_ONE_VENUE', getDetailsVenue);

    yield takeLatest('SAVE_VENUES_GENERAL', saveVenueDetailsGeneral);

    yield takeLatest('DELETE_VENUE', deleteVenue);
}

function* deleteVenue(action){
    try {
        yield axios.delete(`/api/venue/delete/${action.payload}`);
        yield put({ type: 'GET_VENUES' });
    } catch (error) {
        console.log('error in deleteVenue function in venueDetailsSaga,', error);
    }
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
    try {
        yield axios.put('/api/venue/save-contacts', action.payload);
        yield axios.put('/api/venue/save-venue', action.payload);
    } catch (error) {
        console.log('error saving venue details and general tab', error);
        
    }
    
}

export default venueDetailsSaga;