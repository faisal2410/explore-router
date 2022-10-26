import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails=useLoaderData();
    console.log(friendDetails.data)
    return (
        <div>
            <h1>Name: {friendDetails.data.name}</h1>
            <h1>Phone: {friendDetails.data.phone}</h1>
            <h1>Address: {friendDetails.data.address.street}</h1>
            <h1>Company: {friendDetails.data.company.name}</h1>
            <h1>Email: {friendDetails.data.email}</h1>
        </div>
    );
};

export default FriendDetails;