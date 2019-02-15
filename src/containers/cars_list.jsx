import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Car from '../components/car.jsx';
import { loadCars } from '../actions';

class CarsList extends Component {
  componentWillMount() {
    this.props.loadCars();
  }

  render() {
    return(
      <div className="cars-list">
        <div className="aside"><h1>{this.props.garage}</h1></div>
        <list-container>
          {this.props.cars.map(car => <Car car={car} key={car.id} />)}
        </list-container>
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
    { loadCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
