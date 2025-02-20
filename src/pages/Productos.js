import React from "react";

const productos = [
  { id: 1, nombre: "Producto 1", precio: "$10" },
  { id: 2, nombre: "Producto 2", precio: "$20" },
  { id: 3, nombre: "Producto 3", precio: "$30" },
];

const Productos = () => {
  return (
    <div className="container mt-4">
      <h2>Nuestros Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4">
            <div className="card p-3">
              <h4>{producto.nombre}</h4>
              <p>{producto.precio}</p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
