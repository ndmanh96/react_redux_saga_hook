import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

//redux persist
import { persistStore } from "redux-persist";

// redux thunk
import thunk from 'redux-thunk';

//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

//const middlewares = [thunk]; for only thunk
const middlewares = [sagaMiddleware];
//middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//redux persist
export const persistor = persistStore(store);

export default {store, persistor};


