import axios from "axios";

export const friendsLoader=async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users");
}