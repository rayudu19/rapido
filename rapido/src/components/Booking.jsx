import React from 'react';

function Booking({ bike }) {
  return (
    <div className="booking">
      <h2>Booking Confirmed!</h2>
      <p>You have successfully booked the <strong>{bike.name}</strong>.</p>
      <p>Price per ride: ₹{bike.price}</p>
      <button className="cancel-booking">Cancel Booking</button>
    </div>
  );
}

export default Booking;
