import LOAD_CARS from '../actions';

const carsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case LOAD_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default carsReducer;
