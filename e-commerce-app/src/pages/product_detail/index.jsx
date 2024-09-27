import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import { CartContext } from '../../context/CartContext'
import discountTag from "../../assets/images/discount_tag.png"

const ProductDetail = (props) => {
    const { addToCart } = useContext(CartContext)
    const { productDetails } = useContext(ProductContext)
    const navigate = useNavigate()

    const [memberToggled, setMemberToggled] = useState(false)

    function handleChange() {
        setMemberToggled(memberToggled ? false : true)
    }

    function handleAddToCart(productDetails) {
        addToCart(productDetails)
        navigate("/cart")
    }

    return (
        <div className="container grid sm:grid-cols-2 grid-cols-1 gap-6 p-5">

            <div>
                <img src={productDetails[0].images[0]} alt="product" className="w-full" />
            </div>

            <div>
                <h2 className="text-3xl font-medium uppercase mb-2">{productDetails[0].title}</h2>
                <div className="space-y-2 mb-6">
                    <p className="space-x-2 mb-11">
                        <span className="text-gray-800 font-semibold">Category: </span>
                        <span className="text-gray-600">{productDetails[0].category}</span>
                    </p>
                </div>

                <div>
                    <p className="space-x-2">The insurance coverage will include the following protection items:</p>
                    {productDetails[0].coverage.map(function (data, index) {
                        return (<p key={index} className='ml-8'>• {data}</p>)
                    })}
                </div>

                <div className='h-28'>
                    <div className="flex items-baseline mb-3 space-x-2 font-roboto mt-4">
                        {
                            memberToggled ?
                                <>
                                    <p className="text-xl text-primary font-semibold line-through">₱{productDetails[0].price}</p>
                                    <p className="text-2xl text-primary font-semibold">₱{(productDetails[0].price - 100)}</p>
                                </> :
                                <p className="text-2xl text-primary font-semibold">₱ {productDetails[0].price}</p>
                        }
                    </div>

                    <label className="relative inline-flex cursor-pointer items-center box-border">
                        <input onChange={() => handleChange()} type="checkbox" value="" className="peer sr-only" />
                        <div
                            className="peer flex h-8 items-center gap-4 rounded-full bg-primary px-3 after:absolute after:left-3 after: after:h-6 after:w-16 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-emerald-700 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white"
                        >
                            <span>Regular</span>
                            <span>Member</span>
                        </div>
                    </label>

                    <img src={discountTag} alt="discount_tag" className='w-12 h-12 inline-block relative right-4 bottom-2' />

                    {memberToggled ? <a onClick={() => document.getElementById('my_modal_1').showModal()} className='text-md block text-blue-700 mt-2 cursor-pointer'>Click here to become a member!</a> : <p className='text-sm mt-2'>Check member price.</p>}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-white">
                            <h3 className="font-bold text-lg">Become a member!</h3>
                            <p className="py-2">Enter your name and contact number.</p>
                            <div className="modal-action w-full inline-block">
                                <form method="dialog">
                                    <input type="text" placeholder="Full name" className="input input-bordered border-gray-400 w-full mb-3" />
                                    <input type="text" placeholder="Contact number" className="input input-bordered border-gray-400 w-full mb-3" />
                                    {/* if there is a button in form, it will close the modal */}
                                    <div className='flex justify-end'>
                                        <button className="btn bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                {/* <p className="text-gray-600 my-8">{productDetails[0].description}</p> */}


                <p className='text-center font-medium text-gray-600 mb-3 mt-8'>COMPARE COVERAGE</p>

                <div className="overflow-x-auto mb-10">
                    <table className="table text-gray-600">
                        {/* head */}
                        <thead className='text-base'>
                            <tr>
                                <th className='border border-gray-600'>
                                    <div className='flex justify-between'>
                                        <p>TPL</p>
                                        <p>₱ 300</p>
                                    </div>
                                </th>

                                <th className='border border-gray-600'>
                                    <div className='flex justify-between'>
                                        <p>Comprehensive TPL</p>
                                        <p>₱ 300</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <td className='border border-gray-600 pr-0'>Voluntary third party liability cover.</td>
                                <td className='border border-gray-600 pr-0'>Voluntary third party liability cover.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className='border border-gray-600 pr-0'></td>
                                <td className='border border-gray-600 pr-0'>Own damage and theft of the unit.</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className='border border-gray-600 pr-0'></td>
                                <td className='border border-gray-600 '>2-seat Unnamed passenger personal accident.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-2 flex gap-3 border-b border-gray-200 pb-6">
                    <a href="" onClick={() => handleAddToCart(productDetails[0])}
                        className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                        <i className="fa-solid fa-bag-shopping"></i> Proceed
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
