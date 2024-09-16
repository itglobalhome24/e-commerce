import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import "./App.css"
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import Cart from './Cart'
import Navbar from "./components/Navbar"

function App() {
  const [email, setEmail] = useState("")
  const [cart, setCart] = useState([])

  // useEffect(() => {

  // })


  return (
    <BrowserRouter>
      <div className='h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
