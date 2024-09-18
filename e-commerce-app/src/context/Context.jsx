import { createContext, useEffect, useState } from 'react'
import { productList, categoryList } from '../assets/products.js'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    // useState for Product List
    const [products, setProducts] = useState(productList)

    // useState for Category List
    const [categories, setCategories] = useState(categoryList)

    // useState for filtered Product List
    const [filteredProducts, setFilteredProducts] = useState([])

    // useState for Product Detail
    const [productDetails, setProductDetails] = useState()

    // // useState for Cart Products
    // const [cartProducts, setCartProducts] = useState([])

    const item = localStorage.getItem("cartProducts")
    const result = item ? JSON.parse(item) : []

    const [cartProducts, setCartProducts] = useState(result)
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

    // Set products to localStorage on the first render.
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList))
    }, [])

    // // Get cart products from the localStorage on the first render.
    // useEffect(() => {
    //     const cartProducts = localStorage.getItem("cartProducts")
    //     if (cartProducts) {
    //         setCartProducts(JSON.parse(cartProducts))
    //     }
    // }, [])

    // Update productDetails on localStorage everytime productDetails change.
    useEffect(() => {
        localStorage.setItem("productDetials", JSON.stringify(productDetails))
    }, [[productDetails]])

    // // Update cart products on localStorage everytime cartProducts change.
    // useEffect(() => {
    //     localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    // }, [cartProducts])


    const filterByCategory = (category) => {
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
                products,
                setProducts,
                categories,
                setCategories,
                filteredProducts,
                setFilteredProducts,
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
