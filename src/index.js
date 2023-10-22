import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Tournaments from './routes/Tournaments';
import Tournament from './routes/Tournament';
import Error from './routes/Error';
import "bootstrap/dist/css/bootstrap.min.css";
import Players from './routes/Players';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tournaments",
        children: [
          {
            index: true,
            loader: async () => {
              return await fetch(new URL ("tournaments", "http://localhost:5000/"))
            },
            element: <Tournaments />,
          },
          {
            path: ":id",
            id: "tournament",
            loader: async ({params}) => {
              const {id} = params
              return await fetch(id, new URL ("tournaments", "http://localhost:5000/")).then((res) => res.json())
            },
            children: [
              {
                index: true,
                element: <Tournament />
              },
              {
                path: "players",
                loader: async ({params}) => {
                  const {id} = params
                  return await fetch(new URL("players", new URL(id, new URL ("tournaments", "http://localhost:5000/")))).then((res) => res.json())
                },
                element: <Players />
              }
            ]
          }
        ]
      },
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
