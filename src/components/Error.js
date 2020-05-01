import React from 'react';
import styled from '@emotion/styled';

const WrapperError = styled.div`
    background-color: #e74c3c;
    color:white;
    padding: 1rem;
    width:100%;
    text-align:left;
    margin-bottom:2rem;
    border-radius: 10px;
`;

const Title = styled.h2`
    font-weight:bold;
    margin:0;
`;

const Msm = styled.p`
    margin: 10px 0 0 0;
`;

const Error = ({title, mesage}) => {
    return (  
        <WrapperError>
            <Title>{title}</Title>
            <Msm>{mesage}</Msm>
        </WrapperError>
    );
}
 
export default Error;