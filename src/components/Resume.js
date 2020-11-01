
import React from 'react';
import styled from '@emotion/styled';
import { firstUppercase } from './helper';
import Proptypes from 'prop-types';

const ContainerResume = styled.div`
    padding: 1rem 0;
    text-align: left;
    color: black;
    margin-top: 1rem;
`;

const Resume = ({inputvalue}) => {

    const {brand, year, coverage} = inputvalue;
    if (brand === '' || year === '' || coverage === '') return null;

    return (
      <ContainerResume>
        <h2>Stimation Resume</h2>
        <ul>
            <li><strong>Brand :</strong>{firstUppercase(brand)}</li>
            <li><strong>Coverage: </strong> {firstUppercase(coverage)}</li>
            <li><strong>Year of the car:</strong> {year}</li>
        </ul>
        </ContainerResume>
    );
};

Resume.propTypes = {
    inputvalue: Proptypes.object.isRequired
}

export default Resume;