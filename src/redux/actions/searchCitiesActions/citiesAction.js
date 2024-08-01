import { CITIES } from "../types";

export const setCities = (data,onSuccess,onError)=>({
    type:CITIES,
    data,
    onSuccess,
    onError
})