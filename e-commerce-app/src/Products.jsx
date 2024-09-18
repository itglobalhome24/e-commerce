import { React, useContext } from 'react'
import ProductCard from './components/ProductCard'
import { Context } from './context/Context'

const Products = (props) => {
    const { filteredProducts } = useContext(Context)

    return (
        <div className='w-full h-full box-border'>
            {filteredProducts.map(function (data, index) {
                return (
                    <ProductCard key={index} product_id={data.id} name={data.title} price={data.price} image_url={data.images[0]} setProductID={props.setProductID} />
                )
            })}
        </div>
    )
}

export default Products
