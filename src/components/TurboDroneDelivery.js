import * as React from 'react';
import { connect } from 'react-redux';
import { addDelivery } from '../actions/pizza';

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
            <input
              type="radio"
              value="delivery"
              checked={this.state.selectedDelivery === 'delivery'}
              onChange={this.handleChange} />
            Turbo Drone Delivery
          </label>

          <button className="button" type="submit">Add</button>
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
