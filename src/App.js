import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import Total from './components/Total';
import TurboDroneDelivery from './components/TurboDroneDelivery';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Welcome to New Age Pizza</h1>
          <h2>Build your pizza: </h2>

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
