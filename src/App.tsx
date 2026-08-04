import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechDevelopment from './TechDevelopment';
import Portfolio from './Portfolio';

function App() {



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
