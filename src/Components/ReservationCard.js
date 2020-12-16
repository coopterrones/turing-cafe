import React from 'react';
import '../styles/ReservationCard.css';

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {
  return (
    <section className="reservation-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests:{number}</p>
      <button className="reservation-button" onClick={() => cancelReservation(id)}>Cancel</button>
    </section>

  )
}

export default ReservationCard;