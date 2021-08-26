import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import DataItemAdd from './pages/DataItemAdd';
import DataItemEdit from './pages/DataItemEdit';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="lg">
          <Box style={{ height: 'calc(100vh - 64px)' }}>
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Dashboard />
                      </Route>
                      <Route path="/add">
                          <DataItemAdd />
                      </Route>
                      <Route path="/edit/:id">
                          <DataItemEdit />
                      </Route>
                  </Switch>
              </Router>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
