import { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import accidentInsuranceLogo from "../assets/images/accident_insurance_icon.jpeg"

const SuggestionCard = (props) => {
    const { onClick, product_id, image_url, name } = props
    const { addToCart, setSuggestionAdded } = useContext(CartContext)

    function handleAddSuggestion() {
        const suggestedItem = {
            id: 'vxujaszda4c3',
            title: 'Disability Insurance',
            price: 800,
            category: 'Accident Insurance',
            description: 'Accident insurance is a type of insurance plan that pays out when someone is hurt or killed in an accident. This kind of insurance typically excludes coverage for carelessness, divine acts, and natural disasters. The policy may also have restrictions, such as caps on total payouts or prohibitions on payouts for risky behaviours. A lot of insurance providers offer accident insurance, which may be bought separately or added to an existing policy.',
            images: [accidentInsuranceLogo],
            coverage: ["Accidental Disablement and Dismemberment", "Accidental Medical Reimbursement", "Daily Hospital Confinement Benefit due to Accident (max of 15 days)"]
        }
        addToCart(suggestedItem)
        setSuggestionAdded(true)
    }


    return (
        <div onClick={() => handleAddSuggestion()} className="bg-slate-200 shadow rounded group box-border h-22 w-72 flex space-x-2 p-2 cursor-pointer">
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
