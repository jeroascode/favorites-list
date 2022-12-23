import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <label>Ingrese número de documento</label>
      <input type="number" placeholder="Documento"></input>
      <Link to="/products">Iniciar Sesión</Link>
    </div>
  );
};

export default Login;
