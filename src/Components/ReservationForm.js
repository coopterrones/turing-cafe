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

  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />
        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.Date}
        />
          <input
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
          />
        <input
          type='text'
          placeholder='Number Of Guests'
          name='number'
          value={this.state.number}
        />
        <button>Make Reservation</button>
      </form>      
    )
  }
}

export default ReservationForm;