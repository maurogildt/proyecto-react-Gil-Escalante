import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id)

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex].quantity += quantity
            setCart(updatedCart)
        } else {
            setCart([...cart, { ...product, quantity }])
        }
    }
    

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
