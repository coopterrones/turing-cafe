import React from 'react';
import '../styles/ReservationForm.css';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      name: '',
      date: '',
      time: '',
      number: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return(
      <form className="reservation-form">
        <input className="reservation-form-input"
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input className="reservation-form-input"
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.Date}
          onChange={event => this.handleChange(event)}
        />
          <input className="reservation-form-input"
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
        <input className="reservation-form-input"
          type='text'
          placeholder='Number Of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className="reservation-form-button" onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>      
    )
  }
}

export default ReservationForm;