import { createContext, useEffect, useState } from 'react'
import { productList, categoryList } from '../assets/products.js'
import { usersList } from '../assets/users.js'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    // useState for userData
    const user = localStorage.getItem("userData")
    const activeUser = user ? JSON.parse(user) : []
    const [userData, setUserData] = useState(activeUser)

    const [users, setUsers] = useState(usersList)

    // useState for Product List
    const [products, setProducts] = useState(productList)

    // useState for Category List
    const [categories, setCategories] = useState(categoryList)

    // useState for filtered Product List
    const [filteredProducts, setFilteredProducts] = useState([])

    // useState for selected Category
    const [selectedCategory, setSelectedCategory] = useState("")

    // useState for Product Detail
    const getProductDetails = localStorage.getItem("productDetails")
    const activeProductDetails = getProductDetails ? JSON.parse(getProductDetails) : []
    const [productDetails, setProductDetails] = useState(activeProductDetails)


    // Login userValidation
    function userValidation(email, password) {
        const user = users.find(users => users.email === email)
        if (user) {
            localStorage.setItem("userData", JSON.stringify(user))
            setUserData(user)
            return true
        } else {
            return false
        }
    }

    // Logout userData
    function logoutUser() {
        setUserData(null)
        localStorage.setItem("userData", null)
    }

    // useState for Cart Products
    const items = localStorage.getItem("cartProducts")
    const result = items ? JSON.parse(items) : []
    const [cartProducts, setCartProducts] = useState(result)

    // Update cartProducts on localStorage
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts])

    // Add to cart function
    const addToCart = (item) => {
        const isItemInCart = cartProducts.find((cartItem) => cartItem.id === item.id) // check if the item is already in the cart

        if (isItemInCart) {
            setCartProducts(
                cartProducts.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem // otherwise, return the cart item
                )
            )
        } else {
            setCartProducts([...cartProducts, { ...item, quantity: 1 }]) // if the item is not in the cart, add the item to the cart
        }
        console.log(isItemInCart)
    }

    // Remove from cart function
    const removeFromCart = (item) => {
        const isItemInCart = cartProducts.find((cartItem) => cartItem.id === item.id)

        if (isItemInCart.quantity === 1) {
            setCartProducts(cartProducts.filter((cartItem) => cartItem.id !== item.id)) // if the quantity of the item is 1, remove the item from the cart
        } else {
            setCartProducts(
                cartProducts.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                        : cartItem
                )
            )
        }
    }

    // Clear Cart
    const clearCart = () => {
        setCartProducts([]) // set the cart items to an empty array
    }

    // Update userData on localStorage.
    useEffect(() => {
        console.log(userData, "from useEffect of userData")
        localStorage.setItem("userData", JSON.stringify(userData))
    }, [userData])

    // Set products to localStorage on the first render.
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList))
    }, [])

    // Update productDetails on localStorage everytime productDetails change.
    useEffect(() => {
        localStorage.setItem("productDetails", JSON.stringify(productDetails))
        console.log(productDetails, "productDetails from context")
    }, [[productDetails]])

    const filterByCategory = (category) => {
        setSelectedCategory(category)
        const filteredProductsByCategory = JSON.parse(localStorage.getItem("products")).filter(products => products.category === category)
        localStorage.setItem("filteredProducts", JSON.stringify(filteredProductsByCategory))
        setFilteredProducts(JSON.parse(localStorage.getItem("filteredProducts")))
    }

    const getProductDetail = (id) => {
        const selectedProduct = JSON.parse(localStorage.getItem("products")).filter(products => products.id === id)
        console.log(selectedProduct)
        setProductDetails(selectedProduct)
    }

    return (
        <Context.Provider
            value={{
                userData,
                setUserData,
                userValidation,
                logoutUser,
                products,
                setProducts,
                categories,
                setCategories,
                filteredProducts,
                setFilteredProducts,
                selectedCategory,
                setSelectedCategory,
                filterByCategory,
                productDetails,
                setProductDetails,
                getProductDetail,
                cartProducts,
                setCartProducts,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </Context.Provider>
    )
}
