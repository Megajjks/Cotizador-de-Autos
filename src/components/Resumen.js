import React from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helper";

const WrapperBrief = styled.div`
  padding: 1em;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { brand, year, plan } = datos;
  if (brand === "" || year === "" || plan === "") return null;
  return (
    <WrapperBrief>
      <h2>Resumen de la cotización</h2>
      <ul>
        <li> Marca : {primeraMayuscula(brand)}</li>
        <li> Plan : {primeraMayuscula(plan)}</li>
        <li> Año del auto : {primeraMayuscula(year)}</li>
      </ul>
    </WrapperBrief>
  );
};

export default Resumen;
