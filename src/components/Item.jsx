import { Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="col s6 m4 l2">
            <div className="card">
                <div className="card-image">
                    <img src={product.image} alt={product.name} height={250}/>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{product.name}</h2>
                    <h3 className="price">$ {product.price.toFixed(2)}</h3>
                </div>
                <div className="card-action">
                    <Link to={`/product/${product.id}`}>📃 Detalle</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Item;