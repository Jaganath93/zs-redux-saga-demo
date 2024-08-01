import { api } from "./api"


export const citiesApi = (params) => {
  return api.post(`/api/search/auto-complete?page_no=0`, JSON.stringify(params),{
    headers: {
        "Content-Type": "application/json"
      },
  })
}
