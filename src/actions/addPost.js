import { DirectUpload } from 'activestorage';

export const addPost = (data, token) => {

  const uploadFile = (file, post) => {
    const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
  }

  return (dispatch) => {

    fetch('http://localhost:3000/api/v1/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
        //extract header for auth0
      },
      method: 'POST',  // POST to API adds new post
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    // .then(data => uploadFile(this.state.photo, data))
    .then(post => dispatch({type: 'ADD_POST', payload: post}))
    //dispatched new POST to Postreducer

  }
  
}