import React from 'react'
import { useNavigate } from "react-router-dom"

const CategoryCard = (props) => {
    const { category_id, image_url, name } = props
    const navigate = useNavigate()


    async function getProducts(id) {
        // get products by category_ID

        await props.setCategory(id)
        navigate("/products/category")
    }


    return (
        <div onClick={() => getProducts(category_id)} className='align-top box-border rounded-xl border-gray-700 border-2 inline-block w-80 h-80 p-3 text-center m-6'>
            <img src={image_url} className='w-4/5 h-2/3 my-3 mx-auto' />
            <p className='inline-block text-xl font-semibold mr-3'>{name}</p>
        </div>
    )
}

export default CategoryCard
