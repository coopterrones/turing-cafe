import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationCard from '../Components/ReservationCard';

describe('Reservation Card', () => {
  it('Should render correctly', () => {
    render(<ReservationCard 
      name={'Cooper'}
      date={'12/16'}
      time={'12:00'}
      number={2}
    />)

    const cardName = screen.getByText('Cooper');
    const cardDate = screen.getByText('12/16');
    const cardTime = screen.getByText('12:00');
    const cardNumber = screen.getByText('Number of Guests:2');
    const cardButton = screen.getByText('Cancel');

    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(cardTime).toBeInTheDocument();
    expect(cardNumber).toBeInTheDocument();
    expect(cardButton).toBeInTheDocument();
  })
})