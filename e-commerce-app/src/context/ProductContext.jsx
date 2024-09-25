import { createContext, useEffect, useState } from 'react'
import { productList, categoryList, subCategoryList } from '../assets/products.js'

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {

    // useState for Product List
    const [products, setProducts] = useState(productList)

    // useState for Category List
    const [categories, setCategories] = useState(categoryList)

    // useState for Category List
    const [subCategories, setSubCategories] = useState(subCategoryList)

    // useState for filtered Product List
    const [filteredProducts, setFilteredProducts] = useState([])

    // useState for selected Category
    const [selectedCategory, setSelectedCategory] = useState("")

    // useState for Product Detail
    const getProductDetails = localStorage.getItem("productDetails")
    var activeProductDetails = []
    if (getProductDetails) {
        activeProductDetails = JSON.parse(getProductDetails)
    }
    const [productDetails, setProductDetails] = useState(activeProductDetails)

    // Set products to localStorage on the first render.
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList))
    }, [])

    // Update productDetails on localStorage everytime productDetails change.
    useEffect(() => {
        localStorage.setItem("productDetails", JSON.stringify(productDetails))
    }, [[productDetails]])

    const filterByCategory = (category) => {
        setSelectedCategory(category)
        const filteredProductsByCategory = JSON.parse(localStorage.getItem("products")).filter(products => products.category === category)
        localStorage.setItem("filteredProducts", JSON.stringify(filteredProductsByCategory))
        setFilteredProducts(JSON.parse(localStorage.getItem("filteredProducts")))
    }

    const getProductDetail = (id) => {
        const selectedProduct = JSON.parse(localStorage.getItem("products")).filter(products => products.id === id)
        setProductDetails(selectedProduct)
    }

    return (
        <ProductContext.Provider value={
            {
                products,
                setProducts,
                categories,
                setCategories,
                subCategories,
                setSubCategories,
                filteredProducts,
                setFilteredProducts,
                selectedCategory,
                setSelectedCategory,
                filterByCategory,
                productDetails,
                setProductDetails,
                getProductDetail
            }
        }>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
