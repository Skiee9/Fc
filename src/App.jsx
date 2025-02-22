import React from 'react'
import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import ProductList from "./components/ProductList"
import Checkout from './components/Checkout'
import Cart from "./components/Cart"
import OrderSuccess from './components/OrderSuccess'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<ProductList/>}/>
      <Route path ="/cart" element={<Cart/>}/>
      <Route path ="/checkout" element={<Checkout/>}/>
      <Route path ="/order" element={<OrderSuccess/>}/>
    </Routes>
   </Router>
  )
}

export default App
