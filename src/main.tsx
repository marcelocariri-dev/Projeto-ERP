import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Login from './Pages/Login.tsx';

const router = createBrowserRouter([
{
  element :  <App />,
  children: [
    {
    path: "/", 
    element: <Login/>,
   
    },
    {
      path: "/Home",
      element: <Home/>
    }
  ]
}
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
  </React.StrictMode>,
)
