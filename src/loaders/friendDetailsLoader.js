import axios from "axios";

export const friendDetailsLoader=async({params})=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
}