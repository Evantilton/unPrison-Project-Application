import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* venueDetailsSaga() {
    yield takeLatest('GET_ONE_VENUE', getDetailsVenue);
    yield takeLatest('DELETE_VENUE', deleteVenue);
}

function* deleteVenue(action){
    try {
        console.log('action.payload in deleteVenue is:', action.payload);
        yield axios.delete(`/api/venue/delete/${action.payload}`);
    } catch (error) {
        console.log('error in deleteVenue function in venueDetailsSaga,', error);
    }
}

function* getDetailsVenue(action){
    //sends inputted user value to server side post route
    console.log('details saga', action);
    
    try {
        const venueDetailsResponse = yield axios.get(`/api/venue/${action.payload}`);
        yield put({type: 'SET_VENUE_DETAILS', payload: venueDetailsResponse.data[0]})
    } catch (error) {
        console.log('error getting venue details', error);  
    }
}

export default venueDetailsSaga;