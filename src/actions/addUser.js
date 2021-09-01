export const addUser = (data) => {

    return (dispatch) => {
      
      fetch('http://localhost:3000/api/v1/registrations', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',  // POST to API adds new post
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(user => dispatch({type: 'ADD_USER', payload: user}))
      //dispatched new POST to Postreducer
    }
    
  }