import { React, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import SubCategoryCard from '../../components/SubCategoryCard'

const Subcategories = (props) => {
    const { subCategories } = useContext(ProductContext)

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQuery()

    const subcategory = query.get('subcategory')

    return (
        <div className='container py-8'>
            <div className='grid grid-cols-1 gap-4'>
                {subCategories.map(function (data, index) {
                    if (data.category === subcategory) {
                        return (
                            <SubCategoryCard key={index} title={data.title} image_url={data.image_url} />
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default Subcategories
