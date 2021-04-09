import React from "react";
import "./css/estilos.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Formulario() {
  return (

    <div class="formulario">
      <p><b> Escoge un producto </b></p>
      <select class="text">
        <option value="0">Escoge el tipo de producto</option>
        <option value="1">Type 1</option>
        <option value="2">Type 2</option>
        <option value="2">Type 3</option>
    </select>
    <p></p>

      <p><b> Número de teléfono </b></p>
      <div>
          <input placeholder="Escribe número de teléfono" class="redondeado1"/>
      </div>
      <p></p>

      <p><b> Locación </b></p>
      <select class="edit">
        <option value="0">US</option>
        <option value="1">PE</option>
        <option value="2">SPN</option>
        <option value="3">MXN</option>
    </select>
      <input class="redondeado" placeholder="Escribe dirección" />
      <p></p>

      <p><b>Tipo de delivery</b></p>
      <button class="tipdel" style={{ backgroundColor: '#7B68EE', borderColor: '#7B68EE'}}>
      <img src="https://img.icons8.com/pastel-glyph/64/ffffff/home.png"/>
        <p style={{color: 'white'}}>Casa</p>
      </button>
      <button class="tipdel">
        <img src="https://img.icons8.com/carbon-copy/100/000000/building.png"/>
        <p>Oficina</p>
      </button>
      <button class="tipdel">
        <img src="https://img.icons8.com/dotty/80/000000/hand-drag.png"/>
        <p>Otros</p>
      </button>
      <br/><br/>
      <button class="botonsub"><b>Submit</b></button>
    </div>
  );
}
