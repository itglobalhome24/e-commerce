import { useContext } from 'react'
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
                    <a href="/cart" className='text-xl mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </a>
                </div>
            </nav>

            <div className="h-14 bg-gray-800">
                <div className="container flex items-center justify-between flex-grow px-2 pt-4">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="/all_products" className="text-gray-200 hover:text-white transition">Products</a>
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
