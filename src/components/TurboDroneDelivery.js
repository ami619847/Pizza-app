import * as React from 'react';
import { connect } from 'react-redux';
import { addDelivery } from '../actions/pizza';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'


//Turbo Drone Delivery 10% from total

class TurboDroneDelivery extends React.PureComponent {
  state={}

  handleChange = (event) => {
    this.setState({
      selectedDelivery: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addDelivery(this.state.delivery)
  }

  render() {
    return (

      <div className="delivery">
        <form onSubmit={this.handleSubmit}>

          <label>
            <Checkbox
              color="primary"
              type="radio"
              value="delivery"
              checked={this.state.selectedDelivery === 'delivery'}
              onChange={this.handleChange} />
          </label>
          <Button variant="raised" color="defualt" type="submit">Add Turbo Drone Delivery</Button>
        </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    pizza: state.pizza
  }
}

export default connect(mapStateToProps, { addDelivery })(TurboDroneDelivery)
