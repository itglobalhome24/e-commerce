import { React, useContext } from 'react'
import UserContext from '../../context/UserContext'

const Profile = () => {
    const { userData } = useContext(UserContext)

    return (
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16 mt-9">

            {/* Sidebar */}
            <div className="col-span-3">
                <div className="px-4 py-3 shadow flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <img src={userData.profile_picture} alt="profile"
                            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600">Hello,</p>
                        <h4 className="text-gray-800 font-medium">{userData.first_name} {userData.last_name}</h4>
                    </div>
                </div>

                <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                    <div className="space-y-1 pl-8">
                        <a href="#" className="relative text-primary block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-regular fa-address-card"></i>
                            </span>
                            Manage account
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            Profile information
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            Manage addresses
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            Change password
                        </a>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        <a href="/orders" className="relative hover:text-primary block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-solid fa-box-archive"></i>
                            </span>
                            My order history
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            My returns
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            My Cancellations
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            My reviews
                        </a>
                    </div>

                    <div className="space-y-1 pl-8 pt-4">
                        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                                <i className="fa-regular fa-credit-card"></i>
                            </span>
                            Payment methods
                        </a>
                        <a href="#" className="relative hover:text-primary block capitalize transition">
                            voucher
                        </a>
                    </div>
                </div>
            </div>
            {/* Sidebar */}

            {/* Info */}
            <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
                <h4 className="text-2xl font-medium capitalize mb-9">
                    Profile information
                </h4>
                <div className="space-y-4 mb-9">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label for="first" className='font-medium text-xl'>First name</label>
                            <p className='text-xl pl-6'>{userData.first_name}</p>
                        </div>
                        <div>
                            <label for="last" className='font-medium text-xl'>Last name</label>
                            <p className='text-xl pl-6'>{userData.last_name}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label for="birthday" className='font-medium text-xl'>Birthday</label>
                            <p className='text-xl pl-6'>January 1, 1999</p>
                        </div>
                        <div>
                            <label for="gender" className='font-medium text-xl'>Gender</label>
                            <p className='text-xl pl-6'>Male</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label for="email" className='font-medium text-xl'>Email Address</label>
                            <p className='text-xl pl-6'>{userData.email}</p>
                        </div>
                        <div>
                            <label for="phone" className='font-medium text-xl'>Address</label>
                            <p className='text-xl pl-6'>{userData.delivery_address}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-10">
                    <h4 className="text-lg font-medium capitalize mb-4">
                        Referral Voucher Code
                    </h4>
                    <p className='text-xl pl-6'>v3A2g4eaOP</p>
                </div>

                <div className="mt-4">
                    <a href="/profile/edit"
                        className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
                        Edit Information
                    </a>
                </div>
            </div>
            {/* Info */}

        </div>
    )
}

export default Profile
