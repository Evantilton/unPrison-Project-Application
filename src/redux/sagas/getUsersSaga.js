import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* usersSaga(action) {
    try {
        const userResponse = yield axios.get('/users');
        yield put({ type: 'ALL_USERS', payload: userResponse.data });
        console.log('getUsers was hit with an action', action);
    } catch (error) {
        console.log('error fetching users', error);
    }
}

function* getUsersSaga() {
    yield takeLatest('GET_USERS', usersSaga);
    
  }

export default getUsersSaga;