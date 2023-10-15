const Item = ({product}) => {
    return (
        <div className="col s6 m4 l2">
            <div className="card">
                <div className="card-image">
                    <img src={product.image} alt={product.name} height={250}/>
                    <span className="card-title">{product.name}</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#">Comprar</a>
                </div>
            </div>
        </div>
    );
}
 
export default Item;