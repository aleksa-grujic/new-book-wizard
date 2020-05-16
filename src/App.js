import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './App.css';
import WizardContainer from "./components/wizard-container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
          <Paper elevation={3} style={{marginTop: '40px', padding: '20px'}}>
              <WizardContainer />
          </Paper>
      </Container>
    </div>
  );
}

export default App;
