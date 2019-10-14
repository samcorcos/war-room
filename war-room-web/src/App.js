import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './App.css';

const styles = {
  row: {
    height: 60,
    width: '100%',
    borderBottom: '1px solid grey',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const LandBattle = self => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: 'calc(100vh - 64px)', }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', borderRight: '1px solid grey' }}>
        <div style={styles.row}>
          <div>
            Dead
            {/* <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={values.name}
              onChange={() => handleChange('name')}
              margin="normal"
            /> */}
          </div>
          <div>
            Damaged
          </div>
          <div>
            Strategic Bomber
          </div>
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={{ width: '100%', height: 5, backgroundColor: 'black' }} />
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
        <div style={styles.row}>
          things go here?
        </div>
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>

      </div>
    </div>
  )
}

const initialLandBattle = {
  battleType: 'land',
  player1: {

  },
  player2: {

  },
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      battleType: null // will be "sea" if sea battle or "land" if land battle
    }
  }
  
  render () {
    console.log(this.state)
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <div />
            <div>
              <Button color="secondary" onClick={() => this.setState(initialLandBattle)}>
                New Land Battle
              </Button>
              <Button color="secondary">New Sea Battle</Button>
            </div>
          </Toolbar>
        </AppBar>
        {!this.state.battleType && (
          <div style={{ marginTop: 50 }}>
            Select a new battle type from the nav bar above to get started.
          </div>
        )}
        {this.state.battleType === 'land' && LandBattle(this)}
      </div>
    )
  }
}

export default App;
