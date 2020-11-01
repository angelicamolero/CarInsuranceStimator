import React, { useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getYearDifference, calculateBrand, calculateCoverage } from '../components/helper';

const Field = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #215bb0;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #215bb0;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    letter-spacing: 2px;

    &:hover {
        cursor: pointer;
        background-color: #133669;
    }
`;

const Error = styled.div`
        background-color: red;
        cursor: pointer;
        color: #fff;
        width: 94%;
        padding: 1rem;
        text-align:center;
        margin-bottom: 2rem;
`;

const Form = ({saveResume, saveLoading }) => {

    const [ inputvalue, saveValues ] = useState({
        brand: '',
        year: '',
        coverage: ''
    });

    const [ error, saveError ] = useState(false);

    const { brand, year, coverage } = inputvalue;

    const getInformation = e => {
        saveValues({
            ...inputvalue,
            [e.target.name] : e.target.value
        })
    }

    const stimateInsurance = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || coverage.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);
        let result = 2000;

        // get year difference
        const difference = getYearDifference(year);

        // for each year we should discount a 3%
        result -= ((difference * 3 ) * result) / 100;
        

        // Increase of American is 15%
        // Increase of European is 30%
        // Increase of Asian is 5%
        result = calculateBrand(brand) * result;


        // Basic coverage 20%
        // Complete coverage 50%
        const increaseCoverage = calculateCoverage(coverage);
        result = parseFloat( increaseCoverage * result ).toFixed(2);
        saveLoading(true);
        setTimeout(() => {
            //delete spinner
            saveLoading(false);
             // total
            saveResume({
            stimation: Number(result),
            inputvalue
            })
        }, 3000);
    }

    return (
        <form
        onSubmit={stimateInsurance}
        >

        { error ? <Error>All fields are required</Error> : null }
            <Field>
                <Label>Brand</Label>
                <Select
                name="brand"
                value={brand}
                onChange={getInformation}
                >
                    <option value="">---Select---</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                name="year"
                value={year}
                onChange={getInformation}
                >
                    <option value="">---Select---</option>
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
            </Field>

            <Field>
                <Label>Coverage</Label>
                <InputRadio
                    type="radio"
                    name="coverage"
                    value="basic"
                    checked= {coverage ==="basic"}
                    onChange={getInformation}
                /> Basic
                <InputRadio
                    type="radio"
                    name="coverage"
                    value="complete"
                    checked= {coverage ==="complete"}
                    onChange={getInformation}
                /> Complete
            </Field>

            <Button type="submit">Stimate</Button>
        </form>
    );
};

Form.propTypes = {
    saveResume: PropTypes.func.isRequired,
    saveLoading:  PropTypes.func.isRequired
}

export default Form;