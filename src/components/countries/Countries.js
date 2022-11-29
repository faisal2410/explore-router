import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const {data}=useLoaderData()
    // console.log(data)
    return (
        <div>
            <h1>Hello from countries {data.length}</h1>
            <ul >
            {data.map(c=><li  key={`${c?.ccn3}`}><Link  to={`/country/${c?.name?.common}`}>{c?.name?.common}</Link></li>)}
            </ul>
           
        </div>
    );
};

export default Countries;