import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import FriendDetails from "./components/friendDetails/FriendDetails";
import Friends from "./components/friends/Friends";
import Home from "./components/home/Home";
import PostDetails from "./components/postDetails/PostDetails";
import Posts from "./components/posts/Posts";
import Product from "./components/product/Product";
import Main from "./layout/main/Main";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/product", element: <Product></Product> },
        { path: "/friends",
        loader:async()=>{
          return axios.get("https://jsonplaceholder.typicode.com/users");
          
        },
        element: <Friends></Friends> },
        { path: "/friend/:friendId",
        loader:async(params)=>{          
          return axios.get(`https://jsonplaceholder.typicode.com/users/${params.params.friendId}`);
          
        },
        element: <FriendDetails></FriendDetails> },
        {path:"/posts",
         loader:async()=>{
          return axios.get("https://jsonplaceholder.typicode.com/posts")
         },
         element:<Posts></Posts>
      },
      {path:"/post/:postId",
      loader:async(params)=>{
        console.log(params)
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.params.postId}`)
      },
      element:<PostDetails></PostDetails>
    }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
