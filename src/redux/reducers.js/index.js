import { combineReducers } from "redux";
import { cities } from "./searchCitiesReducers/citiesReducers";





export const rootReducer = combineReducers({
    cities
});