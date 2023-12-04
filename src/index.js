import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Tournaments from './routes/Tournaments';
import Tournament from './routes/Tournament';
import ErrorRoute from './routes/ErrorRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        loader: async () => {
          const tournaments = await fetch("http://localhost:5000/tournaments").then((res) => res.json())
          return tournaments.splice(0, 6)
        }
      },
      {
        path: "tournaments",
        children: [
          {
            index: true,
            loader: async () => {
              return await fetch("http://localhost:5000/tournaments")
            },
            element: <Tournaments />,
          },
          {
            id: "tournament",
            path: ":id",
            loader: async ({params}) => {
              const {id} = params
              return await fetch("http://localhost:5000/tournaments/"+id).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}))
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
                  const players = await fetch("http://localhost:5000/players/"+id).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}))
                  return players
                },
                element: <Players />
              },
              {
                path: "pairings/:roundNumber",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  const games = await fetch("http://localhost:5000/games/"+id+"?round="+roundNumber).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}));
                  const byes = await fetch("http://localhost:5000/byes/"+id+"?round="+roundNumber).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}));
                  return {games, byes}
                },
                element: <Pairings />
              },
              {
                path: "standings/:roundNumber",
                loader: async ({params}) => {
                  const {id, roundNumber} = params
                  return await fetch("http://localhost:5000/standings/"+id+"?round="+roundNumber).then((res => {if(res.ok) {return res.json()} else {throw new Error(res.statusText)}}))
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
