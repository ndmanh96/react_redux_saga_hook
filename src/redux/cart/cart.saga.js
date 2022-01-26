import { takeLatest, call, put, all } from 'redux-saga/effects';

import {clearAllItemCart} from './cart.action';
import {UserActionType} from '../user/user.type';

// will remove all cart item when sign out

export function* clearCartOnSignOut() {
    yield put(clearAllItemCart());
}
export function* onSignOutSuccess() {
    yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga() {
    yield(all([call(onSignOutSuccess)]));
}