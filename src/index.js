import React from "react";
import ReactDOM from "react-dom";
import Header from "./componentes/Header.js";
import Formulario from "./componentes/Formulario.js"
import Footer from "./componentes/Footer";


const App = () => {
  return (
    <body>
      <Header />
      <Formulario />
      <Footer />
    </body>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));