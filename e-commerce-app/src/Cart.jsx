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
        <div className='w-full h-full box-border'>
            <ul className='box-border w-1/3 mt-14 mx-auto bg-slate-200'>
                <li className='h-14 p-4'>
                    <p className='inline-block w-52 mr-8 font-bold'>ITEM</p>
                    <p className='inline-block w-28 font-bold'>QUANTITY</p>
                    <button onClick={() => handleClearCart()} className='w-20 h-9 mr-9 bg-green-400'>Clear</button>
                </li>
                {cartProducts.map(function (data, index) {
                    return (
                        <li key={index} className='h-min p-4'>
                            <p className='inline-block w-52 mr-8 font-semibold'>{data.title}</p>
                            <p className='inline-block w-28 mr-8'>{data.quantity}</p>
                            <button onClick={() => handleClickRemove(data)} className='bg-red-500 text-white w-20 rounded-sm'>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart
