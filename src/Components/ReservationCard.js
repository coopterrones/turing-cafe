import React from 'react';
import '../styles/ReservationCard.css';

const ReservationCard = ({id, name, date, time, number}) => {
  return (
    <section className="reservation-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button>Cancel</button>
    </section>

  )
}

export default ReservationCard;