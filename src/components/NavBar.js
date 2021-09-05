import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link to='/posts' className='navbar-logo' onClick={closeMobileMenu}>
                        <pre>Salute <i className="fas fa-flag-usa" /></pre>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>
                                All Posts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/posts/new' className='nav-links' onClick={closeMobileMenu}>
                                Add Post
                            </Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar