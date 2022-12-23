import React, { useState } from "react";
import axios from "axios";
const baseURL = "http://localhost:5001/api/products";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [available, setAvailable] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const onSubmitProduct = async (e) => {
    e.preventDefault();
    const newProduct = { name: name, available: available };
    await axios
      .post(baseURL, newProduct)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <input
        name="productName"
        placeholder="Nombre del producto"
        value={name}
        onChange={onChangeName}
      ></input>
      <select value={available} onChange={onChangeAvailable}>
        <option value="">Seleccione una opcion</option>
        <option value="Disponible">Disponible</option>
        <option value="No Disponible">No Disponible</option>
      </select>
      <button onClick={onSubmitProduct}>Crear Producto</button>
    </div>
  );
};

export default CreateProduct;
