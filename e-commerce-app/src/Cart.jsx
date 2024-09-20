import { React, useContext } from 'react'
import { Context } from './context/Context'

const Cart = (props) => {
    const { cartProducts, removeFromCart, clearCart } = useContext(Context)

    function handleClickRemove(cartProduct) {
        removeFromCart(cartProduct)
    }

    function handleClearCart() {
        clearCart()
    }

    return (
        <div className='container pt-4 pb-6'>
            <div className='box-border min-w-96 w-1/3 mt-14 mx-auto bg-slate-100'>
                <div className="col-span-4 border border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium">ORDER SUMMARY</h4>
                    <ul>
                        {cartProducts.map((data, index) => (
                            <li key={index} className="flex border-b border-gray-200 py-4 mb-4">
                                <h5 className="text-gray-800 font-medium w-2/3">{data.title}</h5>
                                <p className="text-gray-600 w-6">{data.quantity}</p>
                                <p className="text-gray-800 font-medium w-14">₱ {data.price}</p>
                                <button onClick={() => handleClickRemove(data)} className='bg-red-500 text-white w-20 ml-8 rounded-sm'>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>Subtotal</p>
                        <p>$1280</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>

                    <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                        <p className="font-semibold">Total</p>
                        <p>$1280</p>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox" name="agreement" id="agreement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#"
                            className="text-primary">terms & conditions</a></label>
                    </div>
                    <button onClick={handleClearCart} className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium mb-4">Clear</button>
                    <a href="#"
                        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                        order</a>
                </div>
            </div>
        </div>
    )
}

export default Cart
