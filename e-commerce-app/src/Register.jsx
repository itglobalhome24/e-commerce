import React from 'react'

const Register = () => {
    function handleRegister() {
        // register user to backend.
    }

    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
                <p className="text-gray-600 mb-6 text-sm">Register for new customer</p>
                <form action="" autocomplete="off">
                    <div className="space-y-2">
                        <div className='flex justify-between'>
                            <div className='w-1/2'>
                                <label for="first_name" className="text-gray-600 mb-2 block">First Name</label>
                                <input type="text" name="first_name"
                                    className="inline-block w border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" />
                            </div>
                            <div className='w-1/2'>
                                <label for="last_name" className="text-gray-600 mb-2 block">Last Name</label>
                                <input type="text" name="name" id="name"
                                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label for="email" className="text-gray-600 mb-2 block">Email address</label>
                            <input type="email" name="email"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com" />
                        </div>
                        <div>
                            <label for="password" className="text-gray-600 mb-2 block">Password</label>
                            <input type="password" name="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******" />
                        </div>
                        <div>
                            <label for="password_confirmation" className="text-gray-600 mb-2 block">Confirm password</label>
                            <input type="password" name="password_confirmation" id="confirm"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center">
                            <input type="checkbox" name="aggreement" id="aggreement"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label for="aggreement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="" className="text-primary">terms & conditions</a></label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                            account</button>
                    </div>
                </form>

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-4 flex gap-4">
                    <a href="#"
                        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                    <a href="#"
                        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
                </div>

                <p className="mt-4 text-center text-gray-600">Already have account? <a href="/login"
                    className="text-primary">Login now</a></p>
            </div>
        </div>

    )
}

export default Register
