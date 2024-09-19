import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './context/Context'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Categories from './Categories'
import Products from './Products'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Profile from "./Profile"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Categories />} />
          <Route path="/products/category" element={<Products />} />
          <Route path="/products/detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
