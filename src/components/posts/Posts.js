import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';
import "./posts.css"

const Posts = () => {
    const posts=useLoaderData();
    console.log(posts)
   
    return (
        <div className="posts-container">           
           {
            posts.data.map(post=><Post key={post.id} post={post}></Post>)
           }
        </div>
    );
};

export default Posts;