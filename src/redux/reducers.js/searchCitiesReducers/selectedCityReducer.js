import { GET_SELECTED_CITY_SUCCESS, GET_SELECTED_CITY_FAILURE } from "../../actions/types";



const setCityReducers = (state = [], action) => {
    switch (action.type) {
        case GET_SELECTED_CITY_SUCCESS:
            return  {city:(action.res).data.data.city, locality:(action.res).data.data.locality}

        case GET_SELECTED_CITY_FAILURE:
            console.log(action)
            return [...state, action.res || action.error]

        default:
            
            return state
    }
};


export const selectedCity = setCityReducers;