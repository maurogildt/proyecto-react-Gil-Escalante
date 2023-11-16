import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "products")

        const q = category ? query(productsRef, where("category", "==", category)) : productsRef

        getDocs(q)
            .then((res) => {
                setProducts(
                    res.docs.map((doc)=>{
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
    }, [category]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;