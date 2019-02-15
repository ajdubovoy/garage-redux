// TODO: add and export your own actions
export const LOAD_CARS = 'LOAD_CARS';

export function loadCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars')
    .then(r  => r.json());

  return {
    type: LOAD_CARS,
    payload: promise
  }
}
