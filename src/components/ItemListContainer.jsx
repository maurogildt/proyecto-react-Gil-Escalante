import React, { useEffect, useState } from "react";
import data from '../data/products.json'

import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [products , setProducts] = useState([])

    const getProducts = () =>{
        return new Promise((resolve, reject)=>{
            resolve(data)
        })
    }

    useEffect(()=>{
        getProducts()
            .then((res)=>{
                setProducts(res) 
            })
    },[])

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer