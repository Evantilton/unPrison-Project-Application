import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveFinancialsTable(action) {
    
    try {
        console.log("savefinanacials",action.payload)
        yield axios.put('/api/events-financials/save', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
}

function* fetchFinancialsTable(action) {
    try{
        const response = yield axios.get(`/api/events-financials/${action.payload}`);
        yield put({ type:'SET_FINANCIALS_TABLE', payload: response.data[0] });
    } catch (error) {
        console.log('error fetching financials table', error);
    }
}

function* eventsFinancialsSaga() {
    yield takeLatest('SAVE_EVENTS_FINANCIALS', saveFinancialsTable); 
    yield takeLatest('FETCH_FINANCIALS_TABLE', fetchFinancialsTable);
}

export default eventsFinancialsSaga;