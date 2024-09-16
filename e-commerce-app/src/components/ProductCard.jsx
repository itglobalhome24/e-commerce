import React from 'react'

const ProductCard = (props) => {
    const { image_url, name, price } = props
    return (
        <div className='align-top box-border rounded-xl border-gray-700 border-2 inline-block w-80 h-80 p-3 text-center m-6'>
            <img src={image_url} className='w-4/5 my-3 mx-auto' />
            <p className='inline-block text-xl font-semibold mr-5'>{name}</p>
            <p className='inline-block text-xl font-semibold mr-9'>$ {price}</p>
            <button className='w-12 h-6 bg-green-600 rounded-md text-white'>Add</button>
        </div>
    )
}

export default ProductCard
