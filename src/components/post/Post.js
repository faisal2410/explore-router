import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,body,id}=post
    return (
        <div className="post">          
          <Link to={`/post/${id}`}>{title}</Link>
           <p>{body}</p>
          
        </div>
    )
    
};

export default Post;