import * as React from 'react';
import { connect } from 'react-redux';
import { addSauce } from '../actions/pizza';
import Button from '@material-ui/core/Button';

const sauceData = {
  "White": {
    sauceType: "White sauce",
    saucePrice: 0
  },
  "Red": {
    sauceType: "Red sauce",
    saucePrice: 0
  },
  "DoubleRed": {
    sauceType: "Double red sauce",
    saucePrice: 1.00
  },
  "Mix": {
    sauceType: "Mix it up",
    saucePrice: 1.50
  }
}

class Sauce extends React.PureComponent {
  state={}

  handleChange = (event) => {
    const selectedSauce = sauceData[event.target.value]

    this.setState({
      sauce: {
        sauceType: selectedSauce.sauceType,
        saucePrice: selectedSauce.saucePrice
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSauce(this.state.sauce)
  }

  render() {
    return (
      <div className="sauce">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Select your sauce</option>
              { Object.keys(sauceData).map(sauce =>
              <option value={sauce} key={sauce}>{sauce}</option>) }
            </select>
          </label>
          <br/>
          <Button variant="raised" color="primary" type="submit">Add Sauce</Button>
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

export default connect(mapStateToProps, { addSauce })(Sauce)
