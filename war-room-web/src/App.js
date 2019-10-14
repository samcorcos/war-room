import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <div />
          <Button color="secondary">New Battle</Button>
        </Toolbar>
      </AppBar>
      <div>
        the goal here is to support a simple battle with two belligerents 
      </div>
    </div>
  );
}

export default App;
