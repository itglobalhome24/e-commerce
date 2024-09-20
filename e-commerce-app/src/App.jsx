import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from './context/Context'
import Home from './pages/home'
import Login from "./pages/login"
import Register from "./pages/register"
import Categories from "./pages/categories"
import Products from "./pages/products"
import ProductDetail from "./pages/product_detail"
import Cart from "./pages/cart"
import OrderHistory from "./pages/order_history"
import Profile from "./pages/profile"
import EditProfile from "./pages/edit_profile"
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
                    <Route path="/orders" element={<OrderHistory />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ContextProvider>
    )
}

export default App
