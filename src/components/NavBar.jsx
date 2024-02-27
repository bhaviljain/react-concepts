import { Link } from "react-router-dom"
import Cart from "./Cart"
import {useSelector } from "react-redux"
const NavBar = () => {
  const cartCount = useSelector(state=>state.cartReducer)
  return (
    <div>
   <ul className="flex w-[100%]	h-20 py-2 justify-between">
       
        <li className="px-4 hover:font-bold"><Link to='/'> Products </Link></li>
        {/* USE LINK coz link does not load the pages but a tag loads the pages */}
       

        <li className="px-4 hover:font-bold"><Link to='/Cart'>Cart {cartCount.length}
        </Link></li>
       
       </ul>


    </div>
  )
}

export default NavBar