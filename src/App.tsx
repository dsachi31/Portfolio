import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechDevelopment from './TechDevelopment';
import Portfolio from './Portfolio';
import { Box, Button, Grid } from '@mui/material';
import bg1 from '../src/bg2.png'

function App() {
  const headStyle = {
    textTransform: 'none', color: '#fff', fontSize: '17px', '&:hover': { textDecoration: "underline", }

  }


  return (
    <div className="App">

      <Router>

        <Routes>
          <Route element={<TechDevelopment />} path='/techdev' />
          <Route element={<Portfolio />} path="/" />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
