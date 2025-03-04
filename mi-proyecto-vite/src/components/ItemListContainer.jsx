import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
  { id: 1, nombre: "Camisa", categoria: "ropa" },
  { id: 2, nombre: "Celular", categoria: "electronica" },
  { id: 3, nombre: "Reloj", categoria: "accesorios" },
];

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(productos.filter(prod => prod.categoria === categoriaId));
        } else {
          resolve(productos);
        }
      }, 1000);
    }).then(data => setItems(data));
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}</h2>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;
