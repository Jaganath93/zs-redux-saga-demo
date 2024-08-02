import { call, put, takeLatest } from "redux-saga/effects";
import { GET_SELECTED_CITY_FAILURE, GET_SELECTED_CITY_SUCCESS, SELECTED_CITY } from "../actions/types";
import { getSelectedApi } from "../apis/getSelectedApi";


export function* getSelectedCity(action){
    // console.log(action)
   try {
    const res = yield call(getSelectedApi,action.data);
    if(res.status === 200 && res?.data?.status==="success")
         {yield put({type:GET_SELECTED_CITY_SUCCESS, res}); console.log(res)}

    else if(res.status === 200 && res?.data?.status === "fail")
        {yield put({type:GET_SELECTED_CITY_FAILURE,res}); console.log(res)}

    else yield console.log("Something Went Wrong");  
   } catch (error) {
        yield put({type: GET_SELECTED_CITY_FAILURE, error});
        console.log(error)
   }  
}


export function* setCitySaga(){
    yield takeLatest(SELECTED_CITY,getSelectedCity);
}