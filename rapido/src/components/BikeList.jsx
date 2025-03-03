import React from 'react';
import BikeCard from './BikeCard';

function BikeList({ onBookBike }) {
  const bikes = [
    { id: 1, name: 'Honda Activa', image: 'https://via.placeholder.com/150', price: '100' },
    { id: 2, name: 'Bajaj Pulsar', image: 'https://via.placeholder.com/150', price: '150' },
    { id: 3, name: 'Hero Splendor', image: 'https://via.placeholder.com/150', price: '80' },
    { id: 4, name: 'TVS Apache', image: 'https://via.placeholder.com/150', price: '120' },
  ];

  return (
    <div className="bike-list">
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} onBookBike={onBookBike} />
      ))}
    </div>
  );
}

export default BikeList;
