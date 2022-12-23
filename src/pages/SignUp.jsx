import React, { useState } from "react";
import axios from "axios";
const baseURL = "http://localhost:5001/api/users";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [document, setDocument] = useState(0);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeDocument = (e) => {
    setDocument(e.target.value);
  };

  const onSubmitUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      nickname: nickname,
      document: document,
    };
    await axios
      .post(baseURL, newUser)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <input type="text" placeholder="Nombre" onChange={onChangeName}></input>
      <input
        type="text"
        placeholder="Nickname"
        onChange={onChangeNickname}
      ></input>
      <input
        type="number"
        placeholder="Documento"
        onChange={onChangeDocument}
      ></input>
      <button onClick={onSubmitUser}>Registrarse</button>
    </div>
  );
};

export default SignUp;
