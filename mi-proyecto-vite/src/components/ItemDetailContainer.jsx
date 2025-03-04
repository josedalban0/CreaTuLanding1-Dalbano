import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productos = [
  { id: 1, nombre: "Camisa", categoria: "ropa", descripcion: "Camisa de algodón" },
  { id: 2, nombre: "Celular", categoria: "electronica", descripcion: "Celular de última generación" },
  { id: 3, nombre: "Reloj", categoria: "accesorios", descripcion: "Reloj digital" },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(prod => prod.id === parseInt(id)));
      }, 1000);
    }).then(data => setProducto(data));
  }, [id]);

  if (!producto) return <h2>Cargando...</h2>;

  return (
    <div className="container mt-4">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default ItemDetailContainer;
