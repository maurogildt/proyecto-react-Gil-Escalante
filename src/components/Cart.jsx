import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)

    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const handleFinalizarCompra = () => {
        Swal.fire({
            title: "Compra Finalizada",
            text: "Gracias por tu compra. El total es $" + calcularTotal(),
            icon: "success",
            confirmButtonText: "Cerrar",
        })
        clearCart()
    }

    return (
        <div>
            <h2 className="card-panel purple lighten-2">🛒 Tu Carrito 🤗 ✨</h2>
            {cart.length === 0 ? (
                <p className="card-panel center purple lighten-2">El carrito está vacío</p>
            ) : (
                <div>
                        <table className="striped">
                        <thead>
                            <tr>
                                <th>Orden</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}.</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <p className="right-align">Total: ${calcularTotal()}</p>
                        <button className="right badge purple lighten-2" onClick={handleFinalizarCompra}>Finalizar Compra</button>
                </div>
            )}
        </div>
    )
}

export default Cart
