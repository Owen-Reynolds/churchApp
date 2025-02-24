import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import crossImage from '../../assets/homePageAssets/vitalitylogowhite.png';
import fbLogo from '../../assets/facebooklogo.png';
import ytLogo from '../../assets/ytlogo.png';
import igLogo from '../../assets/instagramlogo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-box">
                   <h2>Contact Us</h2>
                    <p>Phone: <a href="tel:440-286-1212">(440) 286-1212</a></p>
                   <p></p>
                </div>
                <div className="footer-social">
                    <h2>Socials</h2>
                    <a href="https://www.facebook.com" target="" rel="">Facebook</a>
                    
                    <a href="https://www.youtube.com" target="" rel="">YouTube</a>
                    
                    <a href="https://www.instagram.com" target="" rel="">Instagram</a>
                 
                </div>
                <div className="map-responsive">
                    <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3178389291693!2d-81.30121112410387!3d41.71365987126017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831a5580607348d%3A0xbadb134bb5a527b3!2sLaMalfa%20Centre%20Hotel%20and%20Suites!5e0!3m2!1sen!2sus!4v1739983511197!5m2!1sen!2sus" 
                width="500" height="300" allowfullscreen="" 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Responsive Google Map"></iframe>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-img">
                <img src = {crossImage} alt=""></img>
                </div>
                <div className="footer-bottom-text">
                <p> Vitality Church | Est. 2014</p>
                </div>
                <div className="footer-bottom-designers">
                <p>Website by:</p>
                </div>
            </div>
        </footer>
          );
    }
   