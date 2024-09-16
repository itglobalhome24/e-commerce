import React from 'react'
import ProductCard from './components/ProductCard'
import "./App.css"

const Products = () => {
    let sampleCatalog = [
        {
            product_name: "Cordless Drill",
            price: 150,
            image_url: "../public/item1.jpeg"
        },
        {
            product_name: "Grinder",
            price: 200,
            image_url: "../public/item2.jpeg"
        },
        {
            product_name: "Leaf Blower",
            price: 180,
            image_url: "../public/item3.jpeg"
        },
        {
            product_name: "Vacuum",
            price: 220,
            image_url: "../public/item4.jpeg"
        }
    ]

    return (
        <div className='w-full h-full box-border'>
            {sampleCatalog.map(function (data, index) {
                return (
                    <ProductCard key={index} name={data.product_name} price={data.price} image_url={data.image_url} />
                )
            })}
        </div>
    )
}

export default Products
