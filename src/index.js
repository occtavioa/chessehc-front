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
              return defer({tournaments: fetch("http://localhost:5000/tournaments").then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}))})
            },
            element: <Tournaments />,
          },
          {
            id: "tournament",
            path: ":id",
            loader: async ({params}) => {
              const {id} = params
              return defer({tournament: fetch("http://localhost:5000/tournaments/"+id).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}))})
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
                path: "pairings/:roundNumber",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  return await fetch("http://localhost:5000/tournaments/"+id+"/pairings/"+roundNumber)
                },
                element: <Pairings />
              },
              {
                path: "standings/:roundNumber",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  return await fetch("http://localhost:5000/tournaments/"+id+"/standings/"+roundNumber)
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
