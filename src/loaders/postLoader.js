import axios from "axios";
export const postsLoader=async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

export const postDetailsLoader=async({params})=>{
    console.log(params)
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
}