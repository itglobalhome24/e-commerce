import React from 'react'

const OrderHistory = () => {
    return (
        <div className="container py-12 px-5">
            <div className="w-full mx-auto">
                <div className="main-data p-4 sm:p-14 bg-gray-50 rounded-3xl">
                    <h2 className="text-center font-semibold text-4xl text-black mb-4">Order History</h2>

                    {/* Transaction Card */}
                    <div className="p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                            <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl object-cover" />
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                                Apple Airpods Pro
                            </h5>
                            <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                        </div>

                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between">
                            <p className="font-semibold text-xl leading-8 text-black">Price:</p>
                            <p className="font-semibold text-xl leading-8 text-black">₱ 249.99</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between ">
                            <p className="font-semibold text-xl leading-8 text-black">Quantity:</p>
                            <p className="font-semibold text-xl leading-8 text-primary">2</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-2 items-center">
                            <p className="font-semibold text-xl leading-8 text-black">Delivery Date:</p>
                            <p className="font-semibold text-xl text-center leading-8 text-black">23rd March 2021</p>
                        </div>
                    </div>
                    {/* Transaction Card */}

                    {/* Transaction Card */}
                    <div className="p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                            <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl object-cover" />
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                                Apple Airpods Pro
                            </h5>
                            <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                        </div>

                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between">
                            <p className="font-semibold text-xl leading-8 text-black">Price:</p>
                            <p className="font-semibold text-xl leading-8 text-black">₱ 249.99</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between ">
                            <p className="font-semibold text-xl leading-8 text-black">Quantity:</p>
                            <p className="font-semibold text-xl leading-8 text-primary">2</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-2 items-center">
                            <p className="font-semibold text-xl leading-8 text-black">Delivery Date:</p>
                            <p className="font-semibold text-xl text-center leading-8 text-black">23rd March 2021</p>
                        </div>
                    </div>
                    {/* Transaction Card */}

                    {/* Transaction Card */}
                    <div className="p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                            <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl object-cover" />
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                                Apple Airpods Pro
                            </h5>
                            <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                        </div>

                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between">
                            <p className="font-semibold text-xl leading-8 text-black">Price:</p>
                            <p className="font-semibold text-xl leading-8 text-black">₱ 249.99</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-between ">
                            <p className="font-semibold text-xl leading-8 text-black">Quantity:</p>
                            <p className="font-semibold text-xl leading-8 text-primary">2</p>
                        </div>
                        <div className="col-span-8 sm:col-span-4 lg:col-span-2 items-center">
                            <p className="font-semibold text-xl leading-8 text-black">Delivery Date:</p>
                            <p className="font-semibold text-xl text-center leading-8 text-black">23rd March 2021</p>
                        </div>
                    </div>
                    {/* Transaction Card */}

                </div>
            </div>
        </div>
    )
}

export default OrderHistory
