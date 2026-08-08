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
      <Grid container sx={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        background: 'linear-gradient(135deg,  #0a080b, #0c0311, #6a1b9a, #6a1b9a,  #401258, #360d4f, #220929, #0c0311, #000)',
        // padding: '5px 10px',
        padding: '10px 80px 10px 70px',
        position: 'sticky',
        top: 0,
        left: 0

      }}>

        <Grid size={2} sx={{ color: '#fff', textAlign: 'left', }} >
          <Button sx={headStyle}>Divya S</Button>
        </Grid>
        <Grid size={3}></Grid>
        <Grid size={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button sx={headStyle}>Home</Button>
          <Button sx={headStyle}>About</Button>
          <Button sx={headStyle}>Experience</Button>
          <Button sx={headStyle}>Projects</Button>
          <Button sx={headStyle}>Skills</Button>
          <Button sx={headStyle}>Resume</Button>
          <Button sx={headStyle}>Contact</Button>
        </Grid>
      </Grid>

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
