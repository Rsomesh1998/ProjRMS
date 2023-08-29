import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookTable from './Components/BookTable';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {  
  BrowserRouter,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import UserHome from './Components/UserHome';
import Orders from './Components/Orders';
import UserLogin from './Components/UserLogin';
import UserReg from './Components/UserReg';
import UserProfile from './Components/UserProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    
  <Route  path='/' element={<UserLogin/>}/>
  <Route  path='booktable' element={<BookTable/>}/>
  <Route path='userhome' element={<UserHome/>}/>
  <Route path='order' element={<Orders/>}/>
  <Route path='userreg' element={<UserReg/>}/>
  <Route path='userprofile' element={<UserProfile/>}/>

  </Routes>
  </BrowserRouter> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
