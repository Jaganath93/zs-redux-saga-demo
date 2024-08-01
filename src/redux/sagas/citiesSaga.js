import { call, takeLatest } from "redux-saga/effects";
import { CITIES } from "../actions/types";
import { citiesApi } from "../apis/citiesApi";


export function* getAllCities(action){
    try {
        const res = yield call(citiesApi,action.data);
        if(res.status === 200 && res?.data?.status === "success"){
            yield action.onSuccess(res);
        } else if(res.status === 200 && res?.data?.status === "fail"){
            yield action.onError(res);
        }
         else yield action.onError("Something Went Wrong");

    } catch (error) {
        yield action.onError(`catch error: ${error}`);
    }
}



export function* citiesSaga(){
    yield takeLatest(CITIES,getAllCities());
}