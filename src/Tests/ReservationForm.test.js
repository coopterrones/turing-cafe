import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from '../Components/ReservationForm';
import userEvent from '@testing-library/user-event';

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

  it('should reflect input values in form inputs correctly', () => {
    render( <ReservationForm /> )

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number Of Guests');
    const reservationButton = screen.getByText('Make Reservation');

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(dateInput, '12/25');
    userEvent.type(timeInput, '12:00');
    userEvent.type(numberInput, '2');

    expect(nameInput).toHaveValue('John Doe');
    expect(dateInput).toHaveValue('12/25');
    expect(timeInput).toHaveValue('12:00');
    expect(numberInput).toHaveValue('2');
  })
})
