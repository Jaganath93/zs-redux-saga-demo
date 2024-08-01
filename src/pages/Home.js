import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {url} from "../config/url.js"


export const Home = () => {
  const [selected,setSelected] = useState("");
  // const demo = ["Mysuru", "Bengaluru"];
  const demo = useSelector((state)=> state)

  // const dispatch = useDispatch();

  const handleSelect = (val)=> setSelected(val);

  useEffect(()=>{fetchData()},[selected]);

  const fetchData = async()=>{
    // try {
    //   const {data} = await axios.post(`${url}/search/auto-complete?page_no=0`,{
    //     city_name:"",
    //     search_string:""
    // });
  
    //   // console.log(data.data.city)
    //   console.log(data)
    // } catch (error) {
    //   console.log(error)
    // }
  };

  return (
    <div className="mt-3">
      <div className="dropdown">
  <button className="btn btn-light bg-white dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {selected}
  </button>
  <ul className="dropdown-menu">
    {demo?.map((val,i)=> <li key={i}><p className="dropdown-item" role="button"  onClick={()=> handleSelect(val)}>{val}</p></li>)}
  </ul>
</div>
    </div>
  )
}
