import React from 'react';
import './Header.css';
import './MobileHeader.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import crossImage from '../../assets/vitalitylogoblue.png';

export default function Header() {
    return(
    <>
    <header>
        <div className="logoHeader">
            <Link to='/'>
            <motion.img 
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}
            src={crossImage} alt="" 
            />
            </Link>
        </div>
        <ul>
            <li><Link to='/AboutUs'>About Us</Link></li>
            <li><Link to='/SundayMornings'>Sunday Mornings</Link></li>
            <li><Link to='/Staff'>Staff</Link></li>
            <li><Link to='/Youth'>Christian Cadets</Link></li>
            <li><Link to='/Connect'>Connect</Link></li>
            <li><Link to='/Give'>Give</Link></li>
        </ul>
    </header>
    </>
    );
}