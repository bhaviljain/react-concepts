import React, { useState } from 'react'
import { useEffect } from 'react';
import { add } from './store/cartSlice';
import {useDispatch} from "react-redux"



const Product = () => {
  const dispatch = useDispatch()
  const [product , setProduct] = useState([])

  useEffect(() => {
    fetchData();
    
    
  },[]);
const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
  
    const json = await data.json();
    console.log(json);
    setProduct(json);
}
const addToCart  = (prod) => {
  dispatch(add(prod))
}

const cards = product.map((prod)=>(

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
            <button onClick={()=>addToCart(prod)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</button>
        </div>
    </div>
</div>


))

      
  return (
    <>
    <div>
        <h1>
<div className='row'>
  {cards}
</div>

        </h1>
    </div>
    </>
  )
}

export default Product