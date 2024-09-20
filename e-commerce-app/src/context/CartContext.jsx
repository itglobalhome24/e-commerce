import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
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
