import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { ContextProvider } from './context/Context'
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

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='h-screen'>
          <Navbar setEmail={setEmail} email={email} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setEmail={setEmail} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Categories setCart={setCart} />} />
            <Route path="/products/category" element={<Products setProductID={setProductID} />} />
            <Route path="/products/detail" element={<ProductDetail productID={productID} setCart={setCart} cart={cart} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>

  )
}

export default App
