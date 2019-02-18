// TODO: add and export your own actions
export const LOAD_CARS = 'LOAD_CARS';
export const CREATE_CAR = 'CREATE_CAR';

export function loadCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/ajdubovoy/cars')
    .then(r  => r.json());

  return {
    type: LOAD_CARS,
    payload: promise
  }
}

export function createCar(body, callback) {
  const request = ('https://wagon-garage-api.herokuapp.com/:garage/cars', body)
    .then(r => r.json())
    .then(callback);

  return {
    type: CREATE_CAR,
    payload: request
  };
}
