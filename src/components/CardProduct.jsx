import React from "react";

const CardProducts = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <label>{product.available}</label>
    </div>
  );
};

export default CardProducts;
