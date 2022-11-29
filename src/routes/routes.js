import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Countries from "../components/countries/Countries";
import CountryDetails from "../components/countryDetails/CountryDetails";
import FriendDetails from "../components/friendDetails/FriendDetails";
import Friends from "../components/friends/Friends";
import Home from "../components/home/Home";
import PostDetails from "../components/postDetails/PostDetails";
import Posts from "../components/posts/Posts";
import Product from "../components/product/Product";
import Main from "../layout/main/Main";
import { countriesLoader, countryDetailsLoader } from "../loaders/countryLoader";
import { friendDetailsLoader } from "../loaders/friendDetailsLoader";
import { friendsLoader } from "../loaders/friendsLoader";
import { postDetailsLoader, postsLoader } from "../loaders/postLoader";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/product", element: <Product></Product> },
        { path: "/friends",
        loader:friendsLoader,
        element: <Friends></Friends> },
        { path: "/friend/:friendId",
        loader:friendDetailsLoader,
        element: <FriendDetails></FriendDetails> },
        {path:"/posts",
         loader:postsLoader,
         element:<Posts></Posts>
      },
      {path:"/post/:postId",
      loader:postDetailsLoader,
      element:<PostDetails></PostDetails>
    },
    {path:"/countries",
    loader:countriesLoader,
    element:<Countries></Countries>
},
    {path:"/country/:countryName",
    loader:countryDetailsLoader,
    element:<CountryDetails></CountryDetails>
},
    {path:"*",element:<div><h1>The route not found:404</h1></div>}
      ],
    },
   
  ]);

  