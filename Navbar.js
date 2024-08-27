import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
    
    const Navbar = () => {
      return (
        <nav className='nav-container'>

            <div className='logo'>
                <img src="https://img.freepik.com/premium-vector/initial-letter-d-logo-design-luxury-d-letter-logotype-sign_754537-118.jpg" alt='' />
            </div>

            <ul className='nav-links'>
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                        <Link to="/gallery" > Gallery </Link>
                    </li>

            </ul>

        </nav>
      )
    }
    
    export default Navbar