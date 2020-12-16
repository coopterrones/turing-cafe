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

export const apiCalls = {
  allReservations: () => {
    return getData('http://localhost:3001/api/v1/reservations');
  }
}