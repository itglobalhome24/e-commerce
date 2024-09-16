import React from 'react'
import "./App.css"

const Register = () => {
    function handleRegister() {
        // register user to backend.
    }

    return (
        <div className='w-full h-full box-border'>
            <div className='box-border w-1/3 bg-slate-300 mt-20 mx-auto rounded-xl py-8 px-16 h-fit'>
                <h2 className='font-semibold text-3xl'>Sign-up</h2>
                <form action="post" className='my-5 mb-36'>
                    <label htmlFor="first_name" className='inline-block my-4 w-40 font-semibold'>First name:</label>
                    <input type="text" name='first_name' className='w-1/2' />
                    <label htmlFor="last_name" className='inline-block my-4 w-40 font-semibold'>Last name:</label>
                    <input type="text" name='last_name' className='w-1/2' />
                    <label htmlFor="email" className='inline-block my-4 w-40 font-semibold'>Email:</label>
                    <input type="text" name='email' className='w-1/2' />
                    <label htmlFor="password" className='inline-block my-4 w-40 font-semibold'>Password:</label>
                    <input type="password" name='password' className='w-1/2' />
                    <label htmlFor="password_confirmation" className='inline-block my-4 w-40 font-semibold'>Confirm password:</label>
                    <input type="password" name='password_confirmation' className='w-1/2' />
                    <label htmlFor="delivery_address" className='inline-block my-4 w-40 font-semibold'>Delivery Address:</label>
                    <textarea name="delivery_address" className='w-1/2  align-bottom'></textarea>
                    <label htmlFor="billing_address" className='inline-block my-4 w-40 font-semibold'>Billing Address:</label>
                    <textarea name="billing_address" className='w-1/2  align-bottom'></textarea>
                    <input type="submit" value={"Register"} className='w-24 h-9 rounded-lg bg-green-500 text-white relative left-80 top-10' />
                </form>

                <p className='inline-block w-72 text-lg'>Already have an account?</p>
                <a href="/login" className='text-blue-500 text-lg'>Log-in</a>
            </div>
        </div>
    )
}

export default Register
