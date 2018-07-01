import * as React from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

class Total extends React.PureComponent {
  render() {
    return (
      <div>
        <Typography variant="title" color="inherit">
          Total price: {(this.props.total).toFixed(2)} €
        </Typography>
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
