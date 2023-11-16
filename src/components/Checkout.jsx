import React, { useContext, useState} from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form"
import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"


const Checkout = () => {
    
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const { register, handleSubmit } = useForm()
    const [ orderId, setOrderId ] = useState("")

    const purchase = (data) => {
        const order = {
            client: data,
            products: cart,
            total: totalPrice()
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
            .then((doc) =>{
                setOrderId(doc.id)
                clearCart()
            })
    }

    const handleFinalizarCompra = () => {
        Swal.fire({
            title: "Compra Finalizada",
            text: `Gracias por tu compra. El total es $${totalPrice()}`,
            icon: "success",
            confirmButtonText: "Cerrar",
        })
    }

    return (
        <div className="container">
            <h1 className="card-panel center purple lighten-4">Finalizar compra 🛒</h1>
            <form className="col s12" onSubmit={handleSubmit(purchase)}>
                <div className="input-field col s12">
                    <input
                        id="nombre"
                        type="text"
                        className="validate"
                        placeholder="Ingresa tu nombre"
                        {...register("nombre")}
                    />
                </div>
                <div className="input-field col s12">
                    <input
                        id="mail"
                        type="email"
                        className="validate"
                        placeholder="Ingresa tu mail"
                        {...register("mail")}
                    />
                </div>
                <div className="input-field col s12">
                    <input
                        id="telefono"
                        type="tel"
                        className="validate"
                        placeholder="Ingresa tu teléfono"
                        {...register("telefono")}
                    />
                </div>
                <button className="btn-large purple lighten-4" type="submit" onClick={handleFinalizarCompra}>Comprar</button>
            </form>
        </div>
    )
}
 
export default Checkout