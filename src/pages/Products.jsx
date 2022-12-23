import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import CardProduct from "../components/CardProduct";

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
      <div className="container-products-title">
        <h2>{userName}</h2>
        <button onClick={handleLogOut}>Cerrar Sesión</button>
      </div>
      <div className="container-products">
        <h1>Productos</h1>
        <div className="container-cards">
          {products.map((product, i) => (
            <CardProduct key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
