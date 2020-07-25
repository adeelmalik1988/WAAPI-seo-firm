import React from 'react';
import classes from './App.module.css';
import LandingPage from './../Components/LandingPage/LandingPage.jsx'

import AnalysisAnim from './AnimationsData/AnalysisAnim'
import ImprovementAnim from './AnimationsData/ImprovementAnim';
import TaskCompletion from './AnimationsData/TaskCompletion';
import About from './About/About'


function App() {
  return (
    <div >
      <LandingPage />

      <div className={classes.wrapper} >
        <AnalysisAnim />
        <TaskCompletion />
        <ImprovementAnim />
      </div>
      <About />

    </div>
  );
}

export default App;
