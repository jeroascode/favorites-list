import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { getUsers } from "./services/user";
import MainPage from "./pages/MainPage";
import CreateProduct from "./pages/CreateProduct";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  const [users, setUsers] = useState();

  const fetchUsers = () => {
    getUsers();
  };

  useEffect(() => {
    // fetchUsers();
  });

  return (
    <BrowserRouter>
      <nav className="container-nav">
        <Link to="/">Inicio</Link>
        <Link to="/create-product">Crear Producto</Link>
        <Link to="/register">Registrar Usuario</Link>
        <Link to="/login">Iniciar Sesion</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
