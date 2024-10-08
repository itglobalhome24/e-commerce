import { React, useContext } from 'react'
import UserContext from '../../context/UserContext'

const EditProfile = () => {
    const { userData } = useContext(UserContext)

    return (
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16 mt-9">

            {/* Sidebar */}
            <div className="col-span-12 sm:col-span-3">
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
                        <a href="/profile" className="relative hover:text-primary block capitalize transition">
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
            <div className="col-span-12 sm:col-span-9 shadow rounded px-6 pt-5 pb-7">
                <h4 className="text-lg font-medium capitalize mb-4">
                    Profile information
                </h4>
                <form action="">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label for="first">First name</label>
                                <input type="text" name="first" id="first" className="input-box" />
                            </div>
                            <div>
                                <label for="last">Last name</label>
                                <input type="text" name="last" id="last" className="input-box" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label for="birthday">Birthday</label>
                                <input type="date" name="birthday" id="birthday" className="input-box" />
                            </div>
                            <div>
                                <label for="gender">Gender</label>
                                <select name="gender" id="gender" className="input-box">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="email" className="input-box" />
                            </div>
                            <div>
                                <label for="phone">Phone number</label>
                                <input type="text" name="phone" id="phone" className="input-box" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button type="submit"
                            className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
            {/* Info */}

        </div>
    )
}

export default EditProfile
