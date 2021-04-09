import React from "react";
import "./css/estilos.css";
import background from "./img/fondo3.jpg";


export default function Header() {
  return (
    <div class="header" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',}}>
      <br></br>
      <img src="https://img.icons8.com/metro/26/ffffff/menu.png"/><b>Crear un nuevo paquete</b>
    </div>
  );
}
