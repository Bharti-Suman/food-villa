import { useState , useContext} from "react";
import {Link} from"react-router-dom"
import UserContext from "./utils/UserContext";
const Title=()=>{
    return(
        <a href="./">
        <img  
        className="h-28 p-2"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
        
        </a>
    )
}
     
const Header=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const { user } =useContext(UserContext)
    return(
    <div className="flex justify-between bg-pink-50 shadow-lg">
 {<Title />}
 < div className="nav-items">
 <ul className="flex py-10" >
    <Link to="/">
    <li className="px-2">Home</li>
    </Link>
    <Link to="/about">
        <li className="px-2">About</li>
        </Link>
    <Link to="/contact">
        <li className="px-2">Contact</li>
        </Link>
    <Link >
        <li className="px-2">Cart</li>
        </Link>
    <Link to="/instamart">
        <li className="px-2">Instamart</li>
        </Link>
        
 </ul>
 <h3>{user.name}</h3>
 </div>
 {isLoggedIn?(<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>):
 (<button onClick={()=>setIsLoggedIn(true)}>LogIn</button>)}
</div>)
};
export default Header;