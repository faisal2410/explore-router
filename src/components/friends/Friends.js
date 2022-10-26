import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';
import "./friends.css"

const Friends = () => {
    const friends=useLoaderData();
    console.log(friends);
    return (
       
      
        <div className="friends-container">
          
            {
                friends.data.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
        
    );
};

export default Friends;