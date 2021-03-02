import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <h3><Link to='/posts' >All Posts /</Link>
      <Link to='/posts/new'> Add Post</Link></h3>
    </div>
  )
}

export default NavBar