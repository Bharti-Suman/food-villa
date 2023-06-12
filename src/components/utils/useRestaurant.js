import {useState,useEffect} from 'react'
import { FETCH_MENU_URL } from '../../Contants';

const useRestaurant = (resId) => {
  const [restaurant,setRestaurant] = useState(null);

  useEffect(()=>{
    getRestaurantInfo();
},[])
async function getRestaurantInfo(){
    const data=await fetch( FETCH_MENU_URL+ resId + "&submitAction=ENTER");
    const json=await data.json();
    console.log(json.data);
    setRestaurant(json.data);
}

return restaurant;
}

export default useRestaurant
