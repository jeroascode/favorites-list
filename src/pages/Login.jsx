import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const baseURL = "http://localhost:5001/api/users/login";

const Login = () => {
  const [document, setDocument] = useState(0);

  const onChangeDocument = (e) => {
    setDocument(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(baseURL, { document: document })
      .then((res) => {
        const user = res.data;
        const cookies = new Cookies();
        cookies.set("userName", user.name, { path: "/" });
        window.location.href = "/products";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <label>Ingrese número de documento</label>
      <input
        type="number"
        placeholder="Documento"
        onChange={onChangeDocument}
      ></input>
      <button onClick={onSubmitLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
