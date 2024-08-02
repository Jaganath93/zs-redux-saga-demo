import { GET_CITIES_SUCCESS,GET_CITIES_FAILURE } from "../../actions/types";



const citiesReducers = (state = [], action) => {
    switch (action.type) {
        case GET_CITIES_SUCCESS:
            return  (action.res).data.data.city;

        case GET_CITIES_FAILURE:
            return [...state, action.res || action.error]

        default:
            return [...state]
    }
};


export const cities = citiesReducers;