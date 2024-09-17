import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Categories from './Categories'
import Products from './Products'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  const [email, setEmail] = useState("")
  const [cart, setCart] = useState([])

  // TEMPORARY USESTATE FOR PRODUCT DETAIL PAGE
  const [productID, setProductID] = useState()
  const [category, setCategory] = useState()

  return (
    <BrowserRouter>
      <div className='h-screen'>
        <Navbar setEmail={setEmail} email={email} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setEmail={setEmail} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Categories setCategory={setCategory} setCart={setCart} />} />
          <Route path="/products/category" element={<Products category={category} setProductID={setProductID} />} />
          <Route path="/products/detail" element={<ProductDetail productID={productID} category={category} setCart={setCart} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
