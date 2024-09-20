import { React, useContext } from 'react'
import UserContext from '../context/UserContext'

const Navbar = (props) => {
    const { userData, logoutUser } = useContext(UserContext)

    async function handleLogout() {
        // register user to backend.
        await logoutUser()
        navigate("/")
    }

    return (
        <div>
            <nav className='container flex h-16'>
                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <h1 className='inline-block text-3xl font-nanum font-extrabold'>One World E-Commerce</h1>
                    <a href="/cart" className='text-xl'>Cart</a>
                </div>
            </nav>

            <div className="container flex h-14 bg-gray-800">
                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="/products" className="text-gray-200 hover:text-white transition">Products</a>
                        <a href="" className="text-gray-200 hover:text-white transition">About us</a>
                        <a href="" className="text-gray-200 hover:text-white transition">Contact us</a>
                    </div>
                    <div className="flex items-center space-x-6 capitalize">
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
