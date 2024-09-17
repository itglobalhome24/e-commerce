import React from 'react'
import { useNavigate } from "react-router-dom"

const ProductCard = (props) => {
    const { product_id, image_url, name, price } = props
    const navigate = useNavigate()

    async function getDetail(id) {
        // get product by ID
        await props.setProductID(id)
        navigate("/products/detail")
    }

    return (
        <div onClick={() => getDetail(product_id)} className='align-top box-border rounded-xl border-gray-700 border-2 inline-block w-80 h-80 p-3 text-center m-6'>
            <img src={image_url} className='w-4/5 h-2/3 my-3 mx-auto' />
            <p className='inline-block text-xl font-semibold mr-3'>{name}</p>
            <p className='inline-block text-xl font-semibold mr-3'>$ {price}</p>
        </div>
    )
}

export default ProductCard
