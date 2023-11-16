import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    return (
        <div className="card">
            <div className="row">
                <div className="col s6 m6 l6">
                    <div className="card-image">
                        <img src={item.image} alt={item.name} height={500} />
                    </div>
                </div>
                <div className="col s6 m6 l6">
                    <div className="card-content">
                        <h2 className="card-title">{item.name}</h2>
                        <ItemCount valInicial={1} stock={item.stock} onAdd={(quantity) => addToCart(item, quantity)} />
                        <h3 className="price">$ {item && item.price && item.price.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
            <div className="card-action">
                <Link to={`/`}>Volver ↩</Link>
                <Link className="right" to={`/cart`}>Ir al carrito 🛒</Link>
            </div>
        </div>
    )
}

export default ItemDetail

