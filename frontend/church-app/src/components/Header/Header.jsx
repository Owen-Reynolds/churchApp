import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

import crossImage from '../../assets/outline-cross-png-3.png';

export default function Header() {
    return(
    <>
    <header>
        <div className="logoHeader">
            <Link to='/'><img src={crossImage} alt="" /></Link>
        </div>
        <ul>
            <li><Link to='/AboutUs'>About Us</Link></li>
            <li><Link to='/SundayMornings'>Sunday Mornings</Link></li>
            <li><Link to='/TrailLife'>Trail Life</Link></li>
            <li><Link to='/Connect'>Connect</Link></li>
            <li><Link to='/Give'>Give</Link></li>
        </ul>
    </header>
    <hr />
    </>
    );
}