import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((res) =>{
                setProduct(
                    {...res.data(), id: res.id}
                )
            })
    }, [id]);

    return (
        <div className='row mb-3 container itemDetail'>
            {product ? <ItemDetail item={product} /> : <h5 className="card-panel center purple lighten-2">Producto no encontrado 🔎</h5>}
        </div>
    );
};

export default ItemDetailContainer;
