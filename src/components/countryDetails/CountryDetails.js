import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const {data}=useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>Country Name : {data[0].name?.common}</h1>
            <h1>Capital : {data[0]?.capital[0]}</h1>
            <img src={data[0].flags.png} alt="Flag" width="200" />
        </div>
    );
};

export default CountryDetails;