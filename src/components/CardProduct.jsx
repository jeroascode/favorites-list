import React from "react";
import "./styled.css"

const CardProducts = ({ product }) => {
  return (
    <div className="container-card-product">
      <h2>{product.name}</h2>
      <label>{product.available}</label>
    </div>
  );
};

export default CardProducts;
