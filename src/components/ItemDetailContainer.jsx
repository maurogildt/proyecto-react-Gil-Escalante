import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./getProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const getProductById = (productId) => {
        const allProducts = getProducts();
        return allProducts.find(product => product.id === parseInt(productId));
    }
    useEffect(() => {
        const item = getProductById(id);
        setProduct(item);
    }, [id]);

    return (
        <div className='row mb-3 container itemDetail'>
            {product ? <ItemDetail item={product} /> : <p>Producto no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;
