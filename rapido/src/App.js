import React, { useState } from 'react';
import Header from './components/Header';
import BikeList from './components/BikeList';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [bookedBike, setBookedBike] = useState(null);

  const handleBooking = (bike) => {
    setBookedBike(bike);
  };

  return (
    <div className="App">
      <Header />
      <BikeList onBookBike={handleBooking} />
      {bookedBike && <Booking bike={bookedBike} />}
      <Footer />
    </div>
  );
}

export default App;
