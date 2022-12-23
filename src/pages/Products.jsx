import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Products = () => {
  const cookies = new Cookies();
  const userName = cookies.get("userName");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:5001/api/products`);
    setProducts(res.data.products);
  };

  const handleLogOut = () => {
    cookies.remove("userName", { path: "/" });
    window.location.href = "/";
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <div>
        <h1>Productos</h1>
        <label>{userName}</label>
        <button onClick={handleLogOut}>Cerrar Sesión</button>
      </div>
      <div className="container-products">
        {products.map((product, i) => (
          <div key={i} className="card-product">
            <label>{product.name}</label>
            <label>{product.available}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
