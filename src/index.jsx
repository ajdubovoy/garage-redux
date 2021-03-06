import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';
import { createHistory as history } from 'history';
import carsReducer from './reducers/cars_reducer';
import garageReducer from './reducers/garage_reducer';
import CarsIndex from './components/cars_index';
import CarsNew from './containers/cars_new'

import '../assets/stylesheets/application.scss';

const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: garageReducer,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={CarsIndex} />
        <Route path="/new" component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
