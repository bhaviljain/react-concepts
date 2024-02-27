import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
 
  const prod = useSelector(state=>state.cartReducer)
  



  const removeCart = (id) =>{
    dispatch(remove(id))
  }

const cards = prod.map((prod)=>(
  <div class=" bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[50%]">
     
          <img class="p-8 h-[180px] w-[200px] object-fill rounded-t-lg ml-[20%]" src={prod.image} alt="product image" />
      <div class="px-5 pb-5">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.title}</h5>
          <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">⭐{prod.rating.rate}</span>
          </div>
          <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">RS : {prod.price}</span>
              <button  onClick={()=>removeCart(prod.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800">Remove</button>
          </div>
      </div>
  </div>
  
  
  ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default Cart