import * as React from 'react';
import { connect } from 'react-redux';

class Total extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Total price: </h2>
         <p>{(this.props.total).toFixed(2)}€</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    total: state.pizza.total
  }
}

export default connect(mapStateToProps)(Total)
