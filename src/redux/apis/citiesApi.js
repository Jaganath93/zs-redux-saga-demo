import { api } from "./api"


export const citiesApi = () => {
  const cities = {
        city_name:"",
        search_string:""
    }
  return api.post(`/api/search/auto-complete?page_no=0`, JSON.stringify(cities)
  )
}
