import { React, useContext } from 'react'
import { Context } from './context/Context'
import CategoryCard from './components/CategoryCard'

const Categories = (props) => {
    const { categories } = useContext(Context)

    return (
        <div className='container py-8'>
            <div className='grid grid-cols-1 gap-4'>
                {categories.map(function (data, index) {
                    return (
                        <CategoryCard key={index} title={data.title} image_url={data.image_url} />
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
