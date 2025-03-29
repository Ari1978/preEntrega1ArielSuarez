import React from "react";
import NavBar from "./assets/components/NavBar";
import ItemListContainer from "./assets/components/ItemListContainer";
import "antd/dist/reset.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;
