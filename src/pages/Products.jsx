import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:5001/api/products`);
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  });
  return (
    <div>
      <h1>Productos</h1>
      <div className="container-products">
        {products.map((product, i) => (
          <div key={i} className="card-product">
            <label >{product.name}</label>
            <label >{product.available}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
