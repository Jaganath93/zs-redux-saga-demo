import { all } from "redux-saga/effects";
import { citiesSaga } from "./citiesSaga";




export function* rootSaga(){
    yield all([
        citiesSaga()
    ])
}