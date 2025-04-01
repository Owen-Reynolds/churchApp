import React from 'react';
import './Header.css';
import './MobileHeader.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {useState} from 'react';

import crossImage from '../../assets/vitalitylogoblue.png';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
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
        <div className="openButtonHeader">
            <span onClick={() => setNavOpen(true)}>Open</span>
        </div>
        <div className="mobileOverlay" style={{width: navOpen ? "100%" : "0%"}}>
            <a href="#" className="closeBtn" onClick={() => setNavOpen(false)}>&times;</a>
            <ul>
                <li><Link to='/AboutUs' onClick={() => setNavOpen(false)}>About Us</Link></li>
                <li><Link to='/SundayMornings' onClick={() => setNavOpen(false)}>Sunday Mornings</Link></li>
                <li><Link to='/Staff' onClick={() => setNavOpen(false)}>Staff</Link></li>
                <li><Link to='/Youth' onClick={() => setNavOpen(false)}>Youth</Link></li>
                <li><Link to='/ChristianCadets' onClick={() => setNavOpen(false)}>Christian Cadets</Link></li>
                <li><Link to='/Connect' onClick={() => setNavOpen(false)}>Connect</Link></li>
                <li><Link to='/Give' onClick={() => setNavOpen(false)}>Give</Link></li>
            </ul>
        </div>
    </header>
    </>
    );
}