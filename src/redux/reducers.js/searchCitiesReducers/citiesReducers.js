import { CITIES } from "../../actions/types";



const citiesReducers = ({state=[],action})=>{
    switch (action.type) {
        case CITIES:
            return[...state]
    
        default:
            return [...state]
    }
};


export const cities = citiesReducers;