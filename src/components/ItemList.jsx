import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <div className="row">
            {
                products.length > 0 &&
                products.map((product)=>{
                    return(
                        <Item key={product.id} product={product}/>
                    )
                })          
            }
        </div>
    );
}
 
export default ItemList;