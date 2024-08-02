import { all } from "redux-saga/effects";
import { citiesSaga } from "./citiesSaga";
import { setCitySaga } from "./setCitySaga";




export function* rootSaga(){
    yield all([
        citiesSaga(),
        setCitySaga()
    ])
}