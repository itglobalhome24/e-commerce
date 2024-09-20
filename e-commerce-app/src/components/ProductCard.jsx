import { React, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from '../context/Context'

const ProductCard = (props) => {
    const { product_id, image_url, name, price } = props
    const { getProductDetail } = useContext(Context)
    const navigate = useNavigate()

    function handleClickProduct(id) {
        getProductDetail(id)
        navigate("/products/detail")
    }

    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden group">
                <div onClick={() => handleClickProduct(product_id)} className="relative h-3/5">
                    <img src={image_url} className="w-full h-full" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <h4 onClick={() => handleClickProduct(product_id)} className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{name}</h4>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">₱ {price}</p>
                    </div>
                </div>
                <a href="" onClick={() => handleClickProduct(product_id)} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    See details
                </a>
            </div>
        </>

    )
}

export default ProductCard
