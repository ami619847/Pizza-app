import * as React from 'react';
import { connect } from 'react-redux';
import { addTopping } from '../actions/pizza';

const toppingData = {
  "Pineapple": {
    toppingType: "Pineapple",
    toppingPrice: 0.5},
  "Corn": {
    toppingType: "Corn",
    toppingPrice: 0.5},
  "Green olives": {
    toppingType: "Green olives",
    toppingPrice: 0.5},
  "Red onion": {
    toppingType: "Red onion",
    toppingPrice: 0.5},
  "Spinach": {
    toppingType: "Spinach",
    toppingPrice: 0.5},
  "Cherry tomatoes": {
    toppingType: "Cherry tomatoes",
    toppingPrice: 0.5},
  "Chicken": {
    toppingType: "Chicken",
    toppingPrice: 0.5},
}

class Toppings extends React.PureComponent {
  state={
    toppings: []
  }

  handleChange = (event) => {
    this.setState({
      toppings: event.target.value
    });
    this.props.addTopping(this.state.toppings)
  }

  render() {
    return (
      <div className="topping">
        <form onSubmit={this.handleSubmit}>
          <p>Select up to 3 toppings: </p>
            {[...Array(3)].map((topping, id) =>
              <select onChange={this.handleChange} key={id}>
                <option value="">Select your topping {id+1}</option>
                { Object.keys(toppingData).map(topping =>
                <option key={topping} value={topping} >{topping}</option>) }
              </select>
            )}
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

export default connect(mapStateToProps, { addTopping })(Toppings)
