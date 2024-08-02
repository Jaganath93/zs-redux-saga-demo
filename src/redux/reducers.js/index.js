import { combineReducers } from "redux";
import { cities } from "./searchCitiesReducers/citiesReducers";
import { selectedCity } from "./searchCitiesReducers/selectedCityReducer";





export const rootReducer = combineReducers({
    cities,
    selectedCity
});