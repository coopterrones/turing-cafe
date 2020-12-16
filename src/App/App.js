import React, { Component } from 'react';
import './App.css';
import { apiCalls } from '../apiCalls';
import Reservations from '../Components/Reservations';
import ReservationForm from '../Components/ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let updateReservations; 
    apiCalls.allReservations()
      .then(data => {
        updateReservations = data.map(reservation => {
          return reservation;
        })
        this.setState({
          reservations: updateReservations
        })
      })
  }

  addReservation = ({id, name, date, time, number}) => {
    const formattedNumber = Number(number);
    apiCalls.addReservation(id, name, time, date, formattedNumber)
      .then(() => this.updateReservations())
  }

  cancelReservation = (id) => {
    console.log(id);
    apiCalls.cancelReservation(id)
      .then(() => this.updateReservations())
  }

  updateReservations = () => {
    let updateReservations;
    apiCalls.allReservations()
      .then(data => {
          updateReservations = data.map(reservation => {
            return reservation;
          })
          this.setState({
            reservations: updateReservations
          })
        })
      }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
