import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function CartWidget() {

    const { cart } = useContext(CartContext)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <>
            <Link to={`/cart`}>Carrito 🛒{totalItems > 0 && <span className="new badge purple lighten-2">{totalItems}</span>}</Link>
        </>
    )
}

export default CartWidget