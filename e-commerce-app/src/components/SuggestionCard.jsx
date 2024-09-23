import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import { ProductContext } from '../context/ProductContext'

const SuggestionCard = (props) => {
    const { product_id, image_url, name } = props

    async function handleAddSuggestion(id) {
        // Add to cart by ID
    }

    return (
        <div className="bg-slate-200 shadow rounded group box-border h-22 w-72 flex space-x-2 p-2">
            <div className="inline-block w-48">
                <img src={image_url} className="h-16 w-20" />
            </div>
            <div className='flex items-center w-64'>
                <h4 className="h-8 font-medium truncate text-md text-gray-800 hover:text-primary transition">{name}</h4>
            </div>
        </div>

    )
}

export default SuggestionCard
