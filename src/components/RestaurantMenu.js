import  { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../Contants';
import Shimmer from './Shimmer';
import useRestaurant from './utils/useRestaurant';

const RestaurantMenu = () => {
     const {resId}=useParams();
    
      // const [restaurant , setRestaurant] =useState(null)
        const restaurant=useRestaurant(resId);

   
  return(!restaurant) ? <Shimmer />: (
    <div className="menu">
    <div>
      <h1>id:{resId}</h1>
      <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
      <h2>{restaurant?.cards[0]?.card?.card?.info?.city}</h2>
      <h2>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h2>
      <h2>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h2>
      <h2>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
    </div>
    {/* <div>
      <h1>Menu</h1>
      <ul>
        {Object.values(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>{
          <li key={restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.card?.info?.name}>{restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.card?.info?.name}</li>
        
        })}
      </ul>
    </div>  */}
    </div>
  )
}

export default RestaurantMenu
