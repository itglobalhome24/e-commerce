import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from './context/Context'

const ProductDetail = (props) => {
    const { productDetails, addToCart, cartProducts } = useContext(Context)

    // async function handleAddToCart(category, product) {
    //     const updatedCart = [...props.cart, { category: category, productID: product }]
    //     console.log(updatedCart, "Updated cart from product details")
    //     await props.setCart(updatedCart)
    //     console.log(props.cart, "cart from product details")
    // }

    function handleAddToCart(productDetails) {
        addToCart(productDetails)
    }

    function checkCartProducts() {
        console.log(cartProducts)
    }

    return (
        <div>
            <div className='inline-block w-1/2'>
                <img src={productDetails[0].images[0]} className='w-3/5 h-auto my-12 mx-auto' />
            </div>
            <div className='inline-block box-border w-1/2 align-top p-36'>
                <h2 className='font-bold text-5xl mb-7'>{productDetails[0].title}</h2>
                <p className='inline-block text-3xl mb-11'>$ {productDetails[0].price}</p>
                <p className='inline-block text-2xl mb-7'>{productDetails[0].description}</p>
                <button onClick={() => handleAddToCart(productDetails[0])} className='w-20 h-9 bg-green-400'>Add</button>
                <button onClick={() => checkCartProducts()} className='w-20 h-9 bg-green-400'>Check</button>
            </div>
        </div>
    )
}

export default ProductDetail
