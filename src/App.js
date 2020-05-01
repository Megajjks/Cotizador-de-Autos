import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form'


const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;
const ContenedorForm = styled.div`
  background-color:#FFF;
  padding:3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"/>
      
      <ContenedorForm>
        <Form/>
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
