import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Tournaments from './routes/Tournaments';
import Tournament from './routes/Tournament';
import ErrorRoute from './routes/ErrorRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import Players from './routes/Players';
import Pairings from './routes/Pairings';
import Standings from './routes/Standings';
import TournamentLayout from './routes/TournamentLayout';

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
              return defer({tournaments: fetch("http://localhost:5000/tournaments/")})
            },
            element: <Tournaments />,
          },
          {
            id: "tournament",
            path: ":id",
            loader: async ({params}) => {
              const {id} = params
              return await fetch("http://localhost:5000/tournaments/"+id)
            },
            element: <TournamentLayout />,
            children: [
              {
                index: true,
                element: <Tournament />
              },
              {
                path: "players",
                loader: async ({params}) => {
                  const {id} = params
                  return await fetch("http://localhost:5000/tournaments/"+id+"/players/")
                },
                element: <Players />
              },
              {
                path: ":roundNumber/pairings",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  return await fetch("http://localhost:5000/tournaments/"+id+"/"+roundNumber+"/"+"pairings")
                },
                element: <Pairings />
              },
              {
                path: ":roundNumber/standings",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  return await fetch("http://localhost:5000/tournaments/"+id+"/"+roundNumber+"/"+"standings")
                },
                element: <Standings />
              }
            ]
          }
        ]
      },
    ],
    errorElement: <ErrorRoute />
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
