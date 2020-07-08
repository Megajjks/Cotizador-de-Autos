import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorForm = styled.div`
  display: flex;
  flex-direction: column;
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
  const [showSpinner, setShowSpinner] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorForm>
        <Form guardarResumen={guardarResumen} setShowSpinner={setShowSpinner} />
        {showSpinner ? (
          <div style={{ alignSelf: "center", marginTop: "2em" }}>
            <Spinner />
          </div>
        ) : null}
        <Resumen datos={datos} />
        {!showSpinner ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
