import { React, useContext } from 'react'
import { Context } from '../context/Context'

const Navbar = (props) => {
    const { userData } = useContext(Context)

    function handleLogout(event) {
        event.preventDefault()
        // register user to backend.
        //
        props.setEmail("")
        navigate("/")
    }

    return (
        <div>
            <nav className='w-full z-30 top-0 py-1'>
                <div>
                    <h1 className='inline-block font-bold ml-5 mr-5 text-4xl'>Sample Shop</h1>
                    <h1 className='inline-block w-11 font-thin ml-5 text-4xl'>{props.email}</h1>
                    <a href="/" className='text-2xl font-bold mr-5 relative left-1/2'>Home</a>
                    <a href="/products" className='text-2xl font-bold mr-5 relative left-1/2'>Products</a>
                    <a href="/cart" className='text-2xl font-bold mr-5 relative left-1/2'>Cart</a>
                    {
                        userData ?
                            <a href="/" onClick={() => handleLogout()} className='text-2xl font-bold mr-5 relative left-1/2'>Logout</a> :
                            <a href="/login" className='text-2xl font-bold mr-5 relative left-1/2'>Login</a>
                    }
                </div>
            </nav>
        </div >
    )
}

export default Navbar
