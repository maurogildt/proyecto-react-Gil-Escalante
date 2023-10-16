import { useState } from "react";

const ItemCount = ({ valInicial, stock }) => {
    const [contador, setContador] = useState(valInicial);
    const aumentar = () => (contador < stock) && setContador(contador + 1)
    const disminuir = () => (contador > valInicial) && setContador(contador - 1)
    return (
        <div>
            <button className="btn-floating btn-small pink lighten-4" onClick={() => disminuir()}>🔻</button>
            {contador}
            <button className="btn-floating btn-small pink lighten-4" onClick={() => aumentar()}>🔺</button>
        </div>
    );
}

export default ItemCount;