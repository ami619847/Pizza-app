import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import Total from './components/Total';
import TurboDroneDelivery from './components/TurboDroneDelivery';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="secondary">
                Welcome to New Age Pizza
              </Typography>
            </Toolbar>
          </AppBar>

          <Typography variant="headline" color="inherit">Build your pizza:</Typography>

          <Base />
          <Sauce />
          <Toppings />
          <TurboDroneDelivery />
          <Total />
          
        </div>
      </Provider>
    );
  }
}

export default App;
