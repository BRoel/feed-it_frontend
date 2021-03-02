import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <Link to='/posts' >All Posts /</Link>
      <Link to='/posts/new'> Add Post</Link>
    </div>
  )
}

export default NavBar