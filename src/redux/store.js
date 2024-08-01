import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers.js";
import { rootSaga } from "./sagas/rootSaga.js";



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);