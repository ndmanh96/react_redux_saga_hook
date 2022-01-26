import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsStart } from './shop/shop.saga';
import { userSaga } from './user/user.saga';
import {cartSaga} from './cart/cart.saga';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSaga), call(cartSaga)]);
}