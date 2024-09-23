import { React, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import ProductContext from '../context/ProductContext'

const ProductCard = (props) => {
    const { product_id, image_url, name, price } = props
    const { getProductDetail } = useContext(ProductContext)
    const navigate = useNavigate()

    function handleClickProduct(id) {
        getProductDetail(id)
        navigate("/products/detail")
    }

    return (
        <div className="bg-white shadow rounded overflow-hidden group box-border h-60 sm:h-full">
            <div onClick={() => handleClickProduct(product_id)} className="relative h-1/2">
                <img src={image_url} className="w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                </div>
            </div>
            <div className="p-3">
                <h4 onClick={() => handleClickProduct(product_id)} className="h-8 font-medium truncate text-md text-gray-800 hover:text-primary transition">{name}</h4>
                <div className="flex items-baseline space-x-2">
                    <p className="text-xl text-primary font-semibold">₱ {price}</p>
                </div>
            </div>
            <a href="" onClick={() => handleClickProduct(product_id)} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                See details
            </a>
        </div>

    )
}

export default ProductCard
