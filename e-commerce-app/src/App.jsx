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
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='h-screen'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Categories />} />
            <Route path="/products/category" element={<Products />} />
            <Route path="/products/detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
