import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,username,email}=friend
    // console.log("test===>",id)
    return (
        
         
           <div key={id} className="friend">
                <h1>The name is {name}</h1>
               <Link to={`/friend/${id}`}> <small>User name:{username}</small></Link>
                <h4>Email: {email}</h4>
            </div>
          
        
    );
};

export default Friend;