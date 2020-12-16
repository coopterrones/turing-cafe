import React from 'react';
import '../styles/Reservations.css';
import ReservationCard from './ReservationCard';

const Reservations = ({reservations}) => {
  const reservationCards = reservations.map((reservation, i) => {
    return ( 
      <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={i}
      />
    )
  })
  return (
    <section className='reservations-container'>
      {reservationCards}
    </section>
  )
}

export default Reservations;