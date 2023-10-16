import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./getProducts";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const filteredProducts = getProducts(category);
        setProducts(filteredProducts);
    }, [category]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;