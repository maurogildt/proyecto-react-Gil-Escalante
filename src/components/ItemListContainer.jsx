import React from "react";

function ItemListContainer({greeting}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Mensaje del Programador 💻</span>
                            <p>{greeting}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer