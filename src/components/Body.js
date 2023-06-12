import {useState,useEffect} from "react";
import {restaurantList} from"../Contants"
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";


const Body=()=>{
    const [searchText,setSearchText]=useState("")
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
    const[allRestaurants,setAllRestaurants]=useState([])
    useEffect(()=>{
        getRestaurants()
    },[])
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5647559&lng=85.216409&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    const isOnline =useOnline();

    if(!isOnline){
      return <h1> Offline,please check your internet connection !!</h1>
    }
    if(!allRestaurants)return null;
   
    return allRestaurants?.length === 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="search-container p-5 bg-pink-50 my-5">
          <input
            type="text"
            className="focus:bg-green-200"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}>
                <RestrauntCard {...restaurant.data}  />
              </Link>
            );
          })}
        </div>
      </>
    );
    
};
export default Body;