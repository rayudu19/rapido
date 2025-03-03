import React from 'react';

function BikeCard({ bike, onBookBike }) {
  return (
    <div className="bike-card">
      <img src={bike.image} alt={bike.name} className="bike-image" />
      <div className="bike-details">
        <h3>{bike.name}</h3>
        <p>Price per ride: ₹{bike.price}</p>
        <button onClick={() => onBookBike(bike)} className="book-button">Book Ride</button>
      </div>
    </div>
  );
}

export default BikeCard;
