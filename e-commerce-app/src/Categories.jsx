import { React, useContext } from 'react'
import { Context } from './context/Context'
import CategoryCard from './components/CategoryCard'

const Categories = (props) => {
    const { categories } = useContext(Context)

    return (
        <div className='w-full h-full box-border'>
            {categories.map(function (data, index) {
                return (
                    <CategoryCard key={index} title={data.title} image_url={data.image_url} />
                )
            })}
        </div>
    )
}

export default Categories
