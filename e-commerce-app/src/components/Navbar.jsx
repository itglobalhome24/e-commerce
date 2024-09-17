import React from 'react'

const Navbar = (props) => {
    function handleLogout(event) {
        event.preventDefault()
        // register user to backend.
        //
        props.setEmail("")
        navigate("/")
    }

    return (
        <div>
            <nav className='box-border p-3'>
                <div>
                    <h1 className='inline-block font-bold ml-5 mr-5 text-4xl'>Sample Shop</h1>
                    <h1 className='inline-block w-11 font-thin ml-5 text-4xl'>{props.email}</h1>
                    <a href="/" className='text-2xl font-bold mr-5 relative left-1/2'>Home</a>
                    <a href="/products" className='text-2xl font-bold mr-5 relative left-1/2'>Products</a>
                    <a href="/cart" className='text-2xl font-bold mr-5 relative left-1/2'>Cart</a>
                    {
                        props.email !== "" ?
                            <a href="/" onClick={() => handleLogout()} className='text-2xl font-bold mr-5 relative left-1/2'>Logout</a> :
                            <a href="/login" className='text-2xl font-bold mr-5 relative left-1/2'>Login</a>
                    }
                </div>
            </nav>
        </div >
    )
}

export default Navbar
