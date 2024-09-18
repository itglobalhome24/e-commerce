import React from 'react'
import { useContext } from 'react'
import { Context } from './context/Context'


const Cart = (props) => {
    const { cartProducts } = useContext(Context)

    return (
        <div className='w-full h-full box-border'>
            <ul>
                {cartProducts.map(function (data, index) {
                    return (
                        <li key={index}>
                            <p className='inline-block mr-8'>{data.title}</p>
                            <p className='inline-block w-28'>{data.quantity}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart
