import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Car from '../components/car.jsx';

class CarsList extends Component {
  render() {
    return(
      <div className="cars-list">
        {this.props.cars.map(car => <Car car={car} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {  },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
