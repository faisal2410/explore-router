import {router} from "./routes/routes"
import {RouterProvider } from "react-router-dom";
import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
