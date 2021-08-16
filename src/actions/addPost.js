export const addPost = (data) => {

  return (dispatch) => {
    
    fetch('http://localhost:3000/api/v1/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',  // POST to API adds new post
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(post => dispatch({type: 'ADD_POST', payload: post}))
    //dispatched new POST to Postreducer
  }
  
}