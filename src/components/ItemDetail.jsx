import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col s6 m6 l6">
                    <div className="card-image">
                        <img src={item.image} alt={item.name} hebight={500}/>
                    </div>
                </div>
                <div className="col s6 m6 l6">
                    <div className="card-content">
                        <h2 className="card-title">{item.name}</h2>
                        <ItemCount valInicial={1} stock={item.stock} />
                        <h3 className="price">$ {item.price.toFixed(2)}</h3>
                        <a className="btn-large pink lighten-3">Comprar 💰</a>
                    </div>
                </div>
            </div>
            <div className="card-action">
                <Link to={`/`}>Volver ↩</Link>
            </div>
        </div>
    );
}
 
export default ItemDetail;