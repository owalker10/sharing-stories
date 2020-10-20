import React from 'react';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { GlobalProvider } from './context'
import theme from './styles/theme'
//import { PrimaryButton, SecondaryButton, FlipButton } from './components/buttons'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'

//import './App.css';

function App() {
  return (
    <div className="App" style={{minHeight: '100vh', overflow: 'hidden'}}>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Router>
              <Switch>
                <Route path='/book'>
                  <Book/>
                </Route>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
            </Router>
          </CssBaseline>
        </ThemeProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
