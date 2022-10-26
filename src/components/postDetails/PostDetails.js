import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetails=useLoaderData()
const{userId,id, title,body}=postDetails.data
    return (
        <div>
            {
               <div>
               <p>Post id :{id}</p>
               <h1>{title}</h1>
                <p>{body}</p>
                <p>Posted by:{userId}</p>
               </div>
            }
        </div>
    );
};

export default PostDetails;