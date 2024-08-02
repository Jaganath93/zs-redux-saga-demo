import { api } from "./api"



export const getSelectedApi = (city)=>{
    const cities = {
        city_name:city,
        search_string:""
    }
  return api.post(`/api/search/auto-complete?page_no=0`, JSON.stringify(cities)
  )
}