import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editFinancialsTable(action) {
    try {
        const response = yield axios.put('/api/events-financials/edit', action.payload );
        yield put({ type:'FETCH_FINANCIALS_TABLE', payload: response.data });
    } catch (error) {
        console.log('error fetching financials', error);
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
    yield takeLatest('EDIT_FINANCIALS_TABLE', editFinancialsTable); 
    yield takeLatest('FETCH_FINANCIALS_TABLE', fetchFinancialsTable);
}

export default eventsFinancialsSaga;