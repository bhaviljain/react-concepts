import { useState } from 'react'
import Product from './components/product'
import {createBrowserRouter , Route, RouterProvider} from "react-router-dom"
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
function App() {
  const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children:[
            {
path: '/Cart',
element: <Cart />,
            },
         
{
path : "/",
element: <Dashboard />,

},


   
],

}
])
       

  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
