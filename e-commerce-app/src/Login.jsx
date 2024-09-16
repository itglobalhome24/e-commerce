import React from 'react'
import "./App.css"

const Login = () => {
    return (
        <div className='w-full h-full box-border'>
            <div className='box-border w-1/3 h-1/2 bg-slate-300 mt-20 mx-auto rounded-xl py-8 px-28'>
                <h2 className='font-semibold text-3xl'>Sign-in</h2>
                <form action="post" className='my-5 mb-36'>
                    <label htmlFor="email" className='inline-block my-4 w-40 font-semibold'>E-mail:</label>
                    <input type="text" name='email' className='w-1/2' />
                    <label htmlFor="password" className='inline-block my-4 w-40 font-semibold'>Password:</label>
                    <input type="password" name='password' className='w-1/2' />
                </form>

                <p className='inline-block w-72 text-lg'>No account yet?</p>
                <a href="/register" className='text-blue-500 text-lg'>Register</a>
            </div>
        </div>
    )
}

export default Login
