import React from 'react';
// import ReactDOM, { render } from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
jest.mock('./App');

describe('App' , () => {

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('should be able to add a reservation', () => {
  //   render( <App /> );
  //   // App.addReservation().mockImplementation({ "id": 1, "name": 'Jane Doe', "date": '12/16', "time":"12:00", "number": "2"});
  //   const mockFn1 = App.addReservation.mockImplementation(() => {{id: "1", name: 'Jane Doe', date: '12/16', time: "12:00", number: "2"}});

  //   expect(App.addReservation()).toHaveBeenCalledTimes(1);
  // })
})

