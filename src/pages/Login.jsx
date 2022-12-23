import React, { useState } from "react";
import axios from "axios";
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
        console.log(user)
        // console.log(user);
        // const cookies = new Cookies();
        // cookies.set("_id", client._id, { path: "/" });
        // cookies.set("managerName", client.managerName, { path: "/" });
        // cookies.set("teamName", client.teamName, { path: "/" });
        window.location.href = "/products";
      })
      .catch((error) => {
        console.log(error);
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
