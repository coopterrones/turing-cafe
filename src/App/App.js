import React, { Component } from 'react';
import './App.css';
import { apiCalls } from '../apiCalls';
import Reservations from '../Components/Reservations';
import ReservationCard from '../Components/ReservationCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
