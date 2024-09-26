import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import { CartContext } from '../../context/CartContext'

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
                    <p className="text-gray-800 font-semibold space-x-2">
                        <span>Availability: </span>
                        <span className="text-green-600">In Stock</span>
                    </p>
                    <p className="space-x-2 mb-11">
                        <span className="text-gray-800 font-semibold">Category: </span>
                        <span className="text-gray-600">{productDetails[0].category}</span>
                    </p>
                </div>

                <div>
                    <p className="space-x-2">The insurance coverage will includethe following protection items:</p>
                    {productDetails[0].coverage.map(function (data, index) {
                        return (<p key={index} className='ml-8'>• {data}</p>)
                    })}
                </div>

                <div className='h-28'>
                    <div className="flex items-baseline mb-3 space-x-2 font-roboto mt-4">
                        <p className="text-2xl text-primary font-semibold">₱ {memberToggled ? (productDetails[0].price - 200) : productDetails[0].price}</p>
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
                    {memberToggled ? <a href="" className='text-md block text-blue-700 mt-2'>Click here to become a member!</a> : <p className='text-sm mt-2'>Check member price.</p>}

                </div>

                <p className="mt-4 text-gray-600">{productDetails[0].description}</p>

                <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                    <a href="" onClick={() => handleAddToCart(productDetails[0])}
                        className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                        <i className="fa-solid fa-bag-shopping"></i> Add to cart
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
