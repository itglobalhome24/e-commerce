import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    // useState for Cart Products
    const cartItems = localStorage.getItem("cartProducts")
    var result = []
    if (cartItems) {
        result = JSON.parse(cartItems)
    }
    const [cartProducts, setCartProducts] = useState(result)

    // Update cartProducts on localStorage
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }, [cartProducts])

    // Add to cart function
    const addToCart = (item) => {
        const itemInCart = cartProducts.find((cartItem) => cartItem.id === item.id)

        if (itemInCart) {
            setCartProducts(
                cartProducts.map(function (cartItem) {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    }
                    return cartItem
                })
            )
            return
        }

        setCartProducts([...cartProducts, { ...item, quantity: 1 }])
    }

    // Remove from cart function
    const removeFromCart = (item) => {
        const itemInCart = cartProducts.find((cartItem) => cartItem.id === item.id)

        if (itemInCart.quantity === 1) {
            setCartProducts(cartProducts.filter((cartItem) => cartItem.id !== item.id))
            return
        }

        setCartProducts(
            cartProducts.map(function (cartItem) {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }
                }
                return cartItem
            })
        )
    }

    // Clear Cart
    const clearCart = () => {
        setCartProducts([])
    }

    return (
        <CartContext.Provider
            value={
                {
                    cartProducts,
                    setCartProducts,
                    addToCart,
                    removeFromCart,
                    clearCart
                }
            }
        >
            {children}
        </CartContext.Provider>
    )
}
