import "./App.css";

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,children:[
      {
        path:'/',    
        element:<Home/>     
      },
      // {
      //   path:'/contact',
      //   element:<Banner/>     
      // },
    ]
  }
])
function App() {
  return (
    <>
      {/* <Header />
      <Banner /> */}
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
