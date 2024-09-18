import { React, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from './context/Context'

const Login = (props) => {
    const { userValidation, userData } = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(event) {
        event.preventDefault()
        const loginSuccessful = userValidation(email, password)
        if (loginSuccessful) {
            navigate("/products")
            return
        }
        alert("Email or password incorrect!")
    }

    return (
        <div className='w-full h-full box-border'>
            <div className='box-border w-1/3 h-1/2 bg-slate-300 mt-20 mx-auto rounded-xl py-8 px-28'>
                <h2 className='font-semibold text-3xl'>Sign-in</h2>
                <form action="" className='my-5 mb-36' onSubmit={handleLogin}>
                    <label htmlFor="email" className='inline-block my-4 w-40 font-semibold'>E-mail:</label>
                    <input type="text" name='email' onChange={(event) => setEmail(event.target.value)} className='w-1/2' />
                    <label htmlFor="password" className='inline-block my-4 w-40 font-semibold'>Password:</label>
                    <input type="password" name='password' onChange={(event) => setPassword(event.target.value)} className='w-1/2' />
                    <input type="submit" value={"Login"} className='w-24 h-9 rounded-lg bg-green-500 text-white relative left-80 top-10' />
                </form>

                <p className='inline-block w-72 text-lg'>No account yet?</p>
                <a href="/register" className='text-blue-500 text-lg'>Login</a>
            </div>
        </div>
    )
}

export default Login
