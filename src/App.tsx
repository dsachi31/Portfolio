//create dockerfile and add commands
//docker build -t bdproject .
// docker run -d -p 3000:80 --name bdproject-container bdproject
//docker ps
//docker --version
//in docker desktop it must be running

// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechDevelopment from './TechDevelopment';
import Portfolio from './Portfolio';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ExperinecePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<TechDevelopment />} path='/techdev' />
          <Route element={<Portfolio />} path="/" />
          <Route element={<Portfolio />} path="/" />
          <Route element={<AboutPage />} path="/di_about" />
          <Route element={<SkillsPage />} path="/di_skills" />
          <Route element={<ExperinecePage />} path="/di_experience" />
          <Route element={<ProjectsPage />} path="/di_projects" />
          <Route element={<ContactPage />} path="/di_contact" />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
