import { React, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = (props) => {
    const { cartProducts, removeFromCart, clearCart } = useContext(CartContext)

    function handleClickRemove(cartProduct) {
        removeFromCart(cartProduct)
    }

    function handleClearCart() {
        clearCart()
    }

    return (
        <div className='container'>
            <div className='box-border min-w-96 w-1/3 my-10 mx-auto bg-slate-100'>
                <div className="col-span-4 border border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium">ORDER SUMMARY</h4>
                    <ul>
                        <li className="flex border-b border-gray-200">
                            <h5 className="text-gray-800 font-semibold w-1/3 mr-16">Product</h5>
                            <p className="text-gray-800 font-semibold w-24">Quantity</p>
                            <p className="text-gray-800 font-semibold w-14">Price</p>
                        </li>
                        {cartProducts.map((data, index) => (
                            <li key={index} className="flex border-b border-gray-200 py-4 mb-4">
                                <h5 className="text-gray-800 font-medium w-1/2 pt-1">{data.title}</h5>
                                <p className="text-gray-600 w-20 text-center px-3 pt-1">{data.quantity}</p>
                                <p className="text-gray-800 font-medium w-24 text-center px-3 pt-1">₱ {data.price}</p>
                                <button onClick={() => handleClickRemove(data)} className='bg-primary text-white w-20 rounded-md p-1'>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>Subtotal</p>
                        <p>₱ 1280</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>Voucher Code</p>
                        <input type="text" className='box-border h-8 w-40 rounded-md pl-3' />
                    </div>

                    <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                        <p className="font-semibold">Total</p>
                        <p>₱ 1280</p>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox" name="agreement" id="agreement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#"
                            className="text-primary">terms & conditions</a></label>
                    </div>
                    <button onClick={handleClearCart} className="block w-full py-3 px-4 text-center text-black bg-slate-300 border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium mb-4">Clear</button>
                    <a href="#"
                        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                        order</a>
                </div>
            </div>
        </div>
    )
}

export default Cart
