import { React, useContext } from 'react'
import { Context } from '../../context/Context'

const ProductDetail = (props) => {
    const { productDetails, addToCart } = useContext(Context)

    function handleAddToCart(productDetails) {
        addToCart(productDetails)
    }

    return (
        <div className="container grid grid-cols-2 gap-6 mt-16">
            <div>
                <img src={productDetails[0].images[0]} alt="product" className="w-full" />
            </div>
            <div>
                <h2 className="text-3xl font-medium uppercase mb-2">{productDetails[0].title}</h2>
                <div className="space-y-2">
                    <p className="text-gray-800 font-semibold space-x-2">
                        <span>Availability: </span>
                        <span className="text-green-600">In Stock</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">Brand: </span>
                        <span className="text-gray-600">{productDetails[0].brand}</span>
                    </p>
                    <p className="space-x-2">
                        <span className="text-gray-800 font-semibold">Category: </span>
                        <span className="text-gray-600">{productDetails[0].category}</span>
                    </p>
                </div>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                    <p className="text-xl text-primary font-semibold">₱ {productDetails[0].price}</p>
                </div>

                <p className="mt-4 text-gray-600">{productDetails[0].description}</p>

                <div className="mt-4">
                    <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>

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
