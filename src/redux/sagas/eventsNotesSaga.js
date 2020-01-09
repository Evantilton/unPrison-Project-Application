import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* saveNotesTable(action) {
    
    try {
        console.log("saveNotes",action.payload)
        yield axios.put('/api/notes/save', action.payload );
    } catch (error) {
        console.log('error saving ', error);
    }
}

function* fetchNotesTable(action) {
    try{
        console.log("trying to fetch notes table")
        const response = yield axios.get(`/api/notes/${action.payload}`);
        yield put({ type:'SET_NOTES_TABLE', payload: response.data[0] });
    } catch (error) {
        console.log('error fetching notes table', error);
    }
}

function* eventsNotesSaga() {
    yield takeLatest('SAVE_EVENTS_NOTES', saveNotesTable); 
    yield takeLatest('FETCH_NOTES_TABLE', fetchNotesTable);
}

export default eventsNotesSaga;