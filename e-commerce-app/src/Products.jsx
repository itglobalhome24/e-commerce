import { React, useContext } from 'react'
import ProductCard from './components/ProductCard'
import { Context } from './context/Context'

const Products = (props) => {
    const { filteredProducts, selectedCategory } = useContext(Context)

    return (
        <div className='container py-16'>
            <h2 className="text-4xl font-medium text-gray-800 mb-14">{selectedCategory}</h2>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-8">
                {filteredProducts.map(function (data, index) {
                    return (
                        <ProductCard key={index} product_id={data.id} name={data.title} price={data.price} image_url={data.images[0]} setProductID={props.setProductID} />
                    )
                })}
            </div>
        </div>
    )
}

export default Products
