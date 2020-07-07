import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorForm>
        <Form guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion={cotizacion} />
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
