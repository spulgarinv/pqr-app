import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
                <Link to="/" className='navbar__header'>
                    <i className='fas fa-headset'/>
                    <span>PQR App</span>
                </Link>
            <div className='navbar__user-icon'><i className="far fa-user" /></div>
        </div>
    )
}

export default Navbar
