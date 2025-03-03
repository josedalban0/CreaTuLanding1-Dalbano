import React from "react";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container mt-4">
      <h2>{mensaje}</h2>
      {/* Aqui renderizare una lista de productos más tarde */}
    </div>
  );
};

export default ItemListContainer;
