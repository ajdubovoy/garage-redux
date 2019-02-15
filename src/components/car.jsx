import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="car-smallad">
      <div className="car-details">
        <h2>{car.brand} - {car.model}</h2>
        <p>Owner: {car.owner}</p>
        <p>Plate: {car.plate}</p>
      </div>
    </div>
  );
};

export default Car;
