import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* deleteUsers(action) {
    try {
        console.log(action.payload)
        yield axios.delete(`/users/delete/${action.payload}`);
        yield put({ type: 'GET_USERS' });
        console.log('deleteUsers was hit with an action', action);
    } catch (error) {
        console.log('error deleting users', error);
    }
}

function* deleteUsersSaga() {
    yield takeLatest('DELETE_USERS', deleteUsers);
  }

export default deleteUsersSaga;