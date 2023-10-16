import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    return (
        <div className="">
            <div className="card">
                <div className="card-image">
                    <img src={item.image} alt={item.name} height={250} />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{item.name}</h2>
                    <h3 className="price">$ {item.price.toFixed(2)}</h3>
                </div>
                <div className="card-action">
                    <Link to={`/#/`}>Volver ↩</Link>
                </div>
            </div>
        </div>
    );
}
 
export default ItemDetail;