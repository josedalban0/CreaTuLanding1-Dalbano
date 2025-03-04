import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((prod) => (
        <div key={prod.id} className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{prod.nombre}</h5>
              <Link to={`/producto/${prod.id}`} className="btn btn-primary">
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
