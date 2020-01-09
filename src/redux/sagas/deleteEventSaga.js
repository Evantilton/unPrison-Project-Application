import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* deleteEvent(action) {
    try {
        console.log("delete event payload is", action.payload)
        yield axios.delete(`/events/delete/${action.payload}`);
        console.log('deleteEvent was hit with an action', action);
    } catch (error) {
        console.log('error deleting Event', error);
    }
}

function* deleteEventSaga() {
    yield takeLatest('DELETE_EVENT', deleteEvent);
  }

export default deleteEventSaga;