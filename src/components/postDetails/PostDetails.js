import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postDetails=useLoaderData()
const{userId,id, title,body}=postDetails.data;
const navigate = useNavigate();
const handleNavigate=()=>{
    navigate(`/friend/${userId}`)
}

    return (
        <div>
            {
               <div>
               <p>Post id :{id}</p>
               <h1>{title}</h1>
                <p>{body}</p>
                <p>Posted by:{userId}</p>
                <button onClick={handleNavigate}>Get the Author</button>
               </div>
            }
        </div>
    );
};

export default PostDetails;