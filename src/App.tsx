import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/applicaton/application';
import { AppProviders } from './components/providers/app-providers';
import { MuiMode } from './components/mui/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application/> */}
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
