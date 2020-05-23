// App Parent Component
import React, { Component, Fragment } from 'react';
import { Container, Typography, Paper } from '@material-ui/core';

// Bottom Navigation Bar Component
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  RestoreIcon,
  FavoriteIcon,
  LocationOnIcon,
  FolderIcon,
} from '@material-ui/icons';

// Appbar Component
import { AppBar, Toolbar } from '@material-ui/core';

// Importing Child Components
import { Header, Footer } from './layouts';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}

  render() {
    return (
      <Fragment>
        <Paper elevation={3} variant="outlined">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="headline" color="inherit">
                HavocOS
              </Typography>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Header />
            <Footer />
          </Container>
        </Paper>
      </Fragment>
    );
  }
}

export default App;
