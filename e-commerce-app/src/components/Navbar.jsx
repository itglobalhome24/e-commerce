import { React, useContext } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/one-world-e-commerce_logo.png"

const Navbar = (props) => {
    const { userData, logoutUser } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleLogout() {
        // register user to backend.
        await logoutUser()
        navigate("/")
    }

    return (
        <div className='sticky top-0 w-screen bg-white z-10'>
            <nav className='h-16'>
                <div className="container flex items-center justify-between flex-grow pt-2 px-2">
                    <img src={logo} alt="logo" className='h-12' />
                    <a href="/cart" className='text-xl'>Cart</a>
                </div>
            </nav>

            <div className="h-14 bg-gray-800">
                <div className="container flex items-center justify-between flex-grow px-2 pt-4">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="/products" className="text-gray-200 hover:text-white transition">Products</a>
                    </div>
                    <div className="flex items-center space-x-3 justify-between capitalize">
                        {
                            userData ?
                                <a href="/profile" className="text-gray-200 hover:text-white transition">Profile</a> :
                                null
                        }
                        {
                            userData ?
                                <a href="/" onClick={() => handleLogout()} className="text-gray-200 hover:text-white transition">Logout</a> :
                                <a href="/login" className="text-gray-200 hover:text-white transition">Login</a>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
