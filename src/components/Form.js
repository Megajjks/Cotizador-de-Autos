import React, { useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Form = ({ guardarResumen }) => {
  const [datos, setDatos] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  // extrayendo los datos del state
  const { brand, year, plan } = datos;

  const obtenerInfo = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario presiona submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    // Tendremos una base
    let resultado = 2000;
    // obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    // por cada años hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    // americano 15%
    // asiation 5%
    // europeo 30%
    resultado = calcularMarca(brand) * resultado;
    // Básico aumenta 20%
    // Completo aumenta 50%
    resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);
    console.log(resultado);
    //Total
    guardarResumen({
      cotizacion: resultado,
      datos,
    });
    return setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error
          title="Ups..."
          mesage="Tal parece que te falta campos por llenar"
        />
      ) : null}

      <Campo>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={obtenerInfo}>
          <option value="">-- Seleecione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInfo}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInfo}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInfo}
        />
        Completo
      </Campo>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Form;
