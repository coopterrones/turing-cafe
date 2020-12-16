import React from 'react';

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

  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.Date}
          onChange={event => this.handleChange(event)}
        />
          <input
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
        <input
          type='text'
          placeholder='Number Of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button>Make Reservation</button>
      </form>      
    )
  }
}

export default ReservationForm;