import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from '../Components/ReservationForm';

describe('Reservation Form', () => {
  it('should render correctly', () => {
    render( <ReservationForm/> )

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number Of Guests');
    const reservationButton = screen.getByText('Make Reservation');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(reservationButton).toBeInTheDocument();
  })
})
