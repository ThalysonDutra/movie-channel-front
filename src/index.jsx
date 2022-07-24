import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesComponent from './routes';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
        <RoutesComponent/>
        <ToastContainer  autoClose={3000}/> 
            
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

