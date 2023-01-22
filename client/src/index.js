import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Getsingle from './Component/getsingle';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider, useParams} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {path:':id',element:<Getsingle/>},
  {path:'/',element:<App />},
  {path:'/*',element:<div>Error 404!</div>}
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
