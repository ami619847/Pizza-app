import * as React from 'react';
import { connect } from 'react-redux';
import { addBase } from '../actions/pizza';

const baseData = {
  "20cm": {
    baseType: "20cm NY Style",
    basePrice: 6.45
  },
  "25cm": {
    baseType: "25cm NY Style",
    basePrice: 8.99
  },
  "30cm": {
    baseType: "30cm NY Style",
    basePrice: 11.49
  },
  "35cm": {
    baseType: "35cm NY Style",
    basePrice: 13.49
  }
}

class Base extends React.PureComponent {
  state={}

  handleChange = (event) => {
    const selectedBase = baseData[event.target.value]

    this.setState({
      base: {
        baseType: selectedBase.baseType,
        basePrice: selectedBase.basePrice
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBase(this.state.base)
  }

  render() {
    return (
      <div className="base">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Select your base</option>
              { Object.keys(baseData).map(base =>
              <option value={base} key={base}>{base}</option>) }
            </select>
          </label>
          <input type="submit" value="Add"/>
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

export default connect(mapStateToProps, { addBase })(Base)
