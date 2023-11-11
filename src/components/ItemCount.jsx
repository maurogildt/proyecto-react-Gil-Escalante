import { useState } from "react"

const ItemCount = ({ valInicial, stock, onAdd }) => {
    const [contador, setContador] = useState(valInicial)
    const [cantidadAcumulada, setCantidadAcumulada] = useState(0)

    const aumentar = () => {
        if (contador + cantidadAcumulada < stock) {
            setContador(contador + 1)
        }
    }

    const disminuir = () => {
        if (contador > valInicial) {
            setContador(contador - 1)
        }
    }

    const handleAddToCart = () => {
        if (contador > 0) {
            setCantidadAcumulada(cantidadAcumulada + contador)
            onAdd(contador)
            setContador(valInicial)
        }
    }

    return (
        <div>
            <button className="btn-floating btn-small pink lighten-4" onClick={disminuir}>🔻</button>
            {contador}
            <button className="btn-floating btn-small pink lighten-4" onClick={aumentar} disabled={contador + cantidadAcumulada === stock}>🔺</button>
            <button className="btn-small pink lighten-3" onClick={handleAddToCart} disabled={contador + cantidadAcumulada === 0}>Agregar al carrito 🛒</button>
        </div>
    )
}

export default ItemCount
