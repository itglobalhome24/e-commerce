import React from 'react'
import CategoryCard from './components/CategoryCard'

const Categories = (props) => {
    let sampleCategories = [
        {
            id: 0,
            category_name: "Construction",
            image_url: "../category1.jpeg"
        },
        {
            id: 1,
            category_name: "Gardening",
            image_url: "../category2.jpeg"
        },
        {
            id: 2,
            category_name: "Farm Supplies",
            image_url: "../category3.jpeg"
        },
        {
            id: 3,
            category_name: "Automotive",
            image_url: "../category4.jpeg"
        }
    ]

    return (
        <div className='w-full h-full box-border'>
            {sampleCategories.map(function (data, index) {
                return (
                    <CategoryCard key={index} category_id={data.id} name={data.category_name} image_url={data.image_url} setCategory={props.setCategory} />
                )
            })}
        </div>
    )
}

export default Categories
