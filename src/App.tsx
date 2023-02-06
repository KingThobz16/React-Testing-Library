import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/applicaton/application';
import { Skills } from './components/skills/skills';
import { SkillsProps } from './components/skills/skills.types';

function App() {
  return (
    <div className="App">
      <Application/>
      {/* <Skills skills={SkillsProps.skills}/> */}
    </div>
  );
}

export default App;

