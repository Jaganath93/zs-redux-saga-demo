import { call, put, takeLatest } from "redux-saga/effects";
import { CITIES, GET_CITIES_FAILURE, GET_CITIES_SUCCESS } from "../actions/types";
import { citiesApi } from "../apis/citiesApi";


export function* getAllCities(){
    try {
        const res = yield call(citiesApi);
        if(res.status === 200 && res?.data?.status === "success"){
            yield put({type: GET_CITIES_SUCCESS, res});
            // console.log(res)
        } else if(res.status === 200 && res?.data?.status === "fail"){
            yield put({type: GET_CITIES_FAILURE, res});
        }
         else yield console.log("Something Went Wrong");

    } catch (error) {
        console.log(error)
        yield put({type: GET_CITIES_FAILURE, error});
    }
}



export function* citiesSaga(){
    yield takeLatest(CITIES,getAllCities);
}