import { React, useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from "react-router-dom"

const CategoryCard = (props) => {
    const { image_url, title } = props
    const { filterByCategory } = useContext(Context)
    const navigate = useNavigate()

    function handleClickCategory(category) {
        filterByCategory(category)
        navigate("/products/category")
    }

    return (
        <div onClick={() => handleClickCategory(title)} className='align-top box-border rounded-xl border-gray-700 border-2 inline-block w-80 h-80 p-3 text-center m-6'>
            <img src={image_url} className='w-4/5 h-2/3 my-3 mx-auto' />
            <p className='inline-block text-xl font-semibold mr-3'>{title}</p>
        </div>
    )
}

export default CategoryCard
