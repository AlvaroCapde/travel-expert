import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import LandingWrapper from './Components/Landing/LandingWrapper'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingWrapper/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

