import { React, useContext } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate } from "react-router-dom"

const CategoryCard = (props) => {
    const { image_url, title } = props
    const { filterByCategory } = useContext(ProductContext)
    const navigate = useNavigate()

    function handleClickCategory(category) {
        filterByCategory(category)
        navigate("/products/category")
    }

    return (
        <>
            <div onClick={() => handleClickCategory(title)} className='relative rounded-md overflow-hidden group h-64 w-3/4 mx-auto'>
                <img src={image_url} className='w-full h-full object-cover' />
                <p className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-6xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>{title}</p>
            </div>
        </>

    )
}

export default CategoryCard
