import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext } from './Context/Context';
import { useState } from 'react';
import PieChart from './Components/PieChart';
import Invoices from './Components/Sidebar/Invoices';

function App() {
  const [colors, setColors] = useState({
    forbgBlue: "#141b2d",
    foricons: "#3da58a",
    forwordsgreen: "#46b59b",
    Searchbox:"#1f2a40"
  });
  const Router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element:<Home/>
          }, {
            path: "/PieChart",
            element:<PieChart/>
          }, {
            path: "/Invoices",
            element:<Invoices/>
          }
        ]
    }
  ])
  return (
    <div className="App">
      <UserContext.Provider value={colors}>
        <RouterProvider router={Router}></RouterProvider>
        
   </UserContext.Provider>
    </div>
  );
}

export default App;
