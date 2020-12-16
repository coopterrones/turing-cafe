const getData = ( path ) => {
  return fetch(path) 
    .then (response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('We apologize. We are having issues loading this page... Please try again later!')
      }
    })
}

const updateData = ( path, action, id, name, time, date, number ) => {
  return fetch(path, {
    method: action,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ id:id, name:name, time: time, date:date, number:number})
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('We apologize. We are having issues loading this page... Please try again later!')
      }
    })
}

const deleteData = ( path, action, id) => {
  return fetch(path, {
    method: action,
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ id:id })
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('We apologize. We are having issues loading this page... Please try again later!')
      }
    })
}

export const apiCalls = {
  allReservations: () => {
    return getData('http://localhost:3001/api/v1/reservations');
  },

  addReservation: (id, name, time, date, number) => {
    return updateData('http://localhost:3001/api/v1/reservations', 'POST', id, name, time, date, number);
  },

  cancelReservation: (id) => {
    return deleteData(`http://localhost:3001/api/v1/reservations/${id}`, 'DELETE', id);
  }
}