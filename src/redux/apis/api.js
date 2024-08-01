import axios from "axios";
import { url } from "../../config/url";


export const api = axios.create({
    baseURL: url,
    headers: { "Content-Type": "application/json" }
})