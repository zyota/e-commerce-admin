import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import "../style/Sidemenu.css";
export default function Sidemenu() {
  const navigate = useNavigate();
  const urlChanger = () => {
    navigate("Home");
  };
  const urlProducts = () => {
    navigate("Products");
  };
  const urlLogin = () => {
    navigate("Login");
  };
  return (
    <div className="sidemenu">
      Sidemenu
      <button onClick={urlChanger}>Home</button>
      <button onClick={urlLogin}>Login</button>
      <button onClick={urlProducts}>Products</button>
    </div>
  );
}
