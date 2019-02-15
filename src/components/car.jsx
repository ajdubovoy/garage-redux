import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="car">
      <h2>{car.brand} - {car.model}</h2>
      <p>Owner: {car.owner}</p>
      <p>Plate: {car.plate}</p>
    </div>
  );
};

export default Car;
