import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {url} from "../config/url.js"
import { getCities } from "../redux/actions/searchCitiesActions/citiesAction.js";
import { selectedCity } from "../redux/actions/searchCitiesActions/selectedCity.js";


export const Home = () => {

  
  const [selected,setSelected] = useState(localStorage.getItem("city")|| "Select city");
  const [locality,setLocality] = useState();
  
  
  
  // const demo = ["Mysuru", "Bengaluru"];
  const allCities = useSelector((state)=> state.cities); // mysore / bang
  const city = useSelector((state)=> state.selectedCity); // filter
  // console.log(city)

  const dispatch = useDispatch();

  // const handleSelect = (val)=> setSelected(val);
  
  const handleSelectCity = (e)=> setSelected(e.target.value);
  const handleSelectLocality = (e)=> setLocality(e.target.value)

  useEffect(()=>{
    fetchData()
     dispatch(selectedCity(selected));
    localStorage.setItem("city", selected);
  },[selected]);


  const fetchData = ()=>{
      dispatch(getCities())
  };




  return (
    <div className="mt-3 d-flex justify-content-around">
      <label for="cars">Choose a location:</label>

<select name="allcities" id="allcities" className="btn btn-light bg-white shadow" onChange={handleSelectCity}>
  {allCities?.map((val)=> <option value={val.city_name} selected={val.city_name === selected ? "selected" : ""}>{val.city_name}</option>)}
</select>
      {/* <div className="dropdown">
  <button className="btn btn-light bg-white dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {selected}
  </button>
  <ul className="dropdown-menu">
    {allCities?.map((val,i)=> <li key={i}><p className="dropdown-item" role="button"  onClick={()=> handleSelect(val.city_name)}>{val.city_name}</p></li>)}
  </ul>

  
</div> */}
{selected?
  <select name="allcities" id="allcities" className="btn btn-light bg-white shadow" onChange={handleSelectLocality}>
  {city.locality?.map((val,i)=> <option key={i}>{val.locality_name}</option>)}
</select>

: "Loading..."}
    </div>
  )
}
