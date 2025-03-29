import React from 'react';
import './Footer.css';
import './MobileFooter.css';

import { Link } from 'react-router-dom';

import crossImage from '../../assets/homePageAssets/vitalitylogowhite.png';
import fbLogo from '../../assets/footerAssets/facebookLogo.png';
import ytLogo from '../../assets/footerAssets/ytLogo.png';
import igLogo from '../../assets/footerAssets/instagramLogo.png';
import liLogo from '../../assets/footerAssets/linkedin.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-box">
                    <h2>Menu</h2>
                    <div className="menu-grid">
                    <p><Link to="/" className="footerButton">Home</Link></p>
                    <p><Link to="/AboutUs" className="footerButton">About Us</Link></p>
                    <p><Link to="/SundayMornings" className="footerButton">Sunday Mornings</Link></p>
                    <p><Link to="/Staff" className="footerButton">Staff</Link></p>
                    <p><Link to="/Youth" className="footerButton">Youth</Link></p>
                    <p><Link to="ChristianCadets" className="footerButton">Christian Cadets</Link></p>
                    <p><Link to="/Connect" className="footerButton">Connect</Link></p>
                    <p><Link to="/Give" className="footerButton">Give</Link></p>
                    </div>
                    <h2>Contact Us</h2>
                    <div className = "contact-grid">
                    <p>Phone: <a href="tel:440-290-0233">(440) 290-0233</a></p>
                    <p>Email: <a href ="email:office@vitalitychurch.org">office@vitalitychurch.org</a></p>
                    </div>
                    <div className="mailAddress">
                    <p>P.O. Box 73 Mentor, Ohio 44061</p>
                    </div>
                    
                </div>
                <div className="footer-social">
                    <h2>Socials</h2>
                    <div className = "social-grid">
                    <a href="https://www.youtube.com/@vitalitychurch5132" target="_blank" rel="youTube"><img src = {ytLogo} alt="youTube"/></a>
                    <a href="https://www.instagram.com/vitality_church/" target="_blank" rel="instagram"><img src = {igLogo} alt="instagram"/></a>
                    <a href="https://www.facebook.com/profile.php?id=61566505584528" target="_blank" rel="faceBook"><img src = {fbLogo} alt="faceBook"/></a>
                    </div>
                </div>

                <div className="map-responsive">
                    <h2 className="footerLocationHeading">Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3178389291693!2d-81.30121112410387!3d41.71365987126017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831a5580607348d%3A0xbadb134bb5a527b3!2sLaMalfa%20Centre%20Hotel%20and%20Suites!5e0!3m2!1sen!2sus!4v1739983511197!5m2!1sen!2sus" 
                width="400" height="250" allowfullscreen="" 
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
                <Link to ="/WebDesigners">
                        <button className="designersButton">Web Designers</button>
                        </Link>
                {/*<p>Website by:</p>*/}
                
               {/*<a href="https://www.linkedin.com/in/nolan-kern25/" target="_blank" rel="linkednInNolan">
                <img src={liLogo} alt="Nolan" />
                </a>
                <a href="https://www.linkedin.com/in/owen-reynolds-b8870a293/" target="_blank" rel="linkednInOwen">
                <img src={liLogo} alt="Owen" />
                </a>
                <a href="https://www.linkedin.com/in/enoch-oye-110800338/" target="_blank" rel="linkednInEnoch">
                <img src={liLogo} alt="Enoch" />
                </a>*/}
                </div>
            </div>
        </footer>
          );
    }
   