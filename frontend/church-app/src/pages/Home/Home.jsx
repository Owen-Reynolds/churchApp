import './Home.css';
import './HomeMobile.css';

import mainImage from '../../assets/homePageAssets/thumbnail_IMG_6616.webp';
import sermonYoutube from '../../assets/homePageAssets/sermonYoutube.webp';

import sliderImage1 from '../../assets/homePageAssets/sliderImages/sliderImage1.jpg';
import sliderImage2 from '../../assets/homePageAssets/sliderImages/sliderImage2.jpg';
import sliderImage3 from '../../assets/homePageAssets/sliderImages/slideImage3.jpg';
import sliderImage4 from '../../assets/homePageAssets/sliderImages/slideImage4.jpg';
import sliderImage5 from '../../assets/homePageAssets/sliderImages/slideImage5.jpg';
import sliderImage6 from '../../assets/homePageAssets/sliderImages/slideImage6.jpg';
import sliderImage7 from '../../assets/homePageAssets/sliderImages/slideImage7.jpg'
import hFlag from '../../assets/homePageAssets/hFlag.webp';
import sundayService from '../../assets/homePageAssets/sundayService.webp';
import vitalityLogoWhite from '../../assets/homePageAssets/vitalitylogowhite.png';
import captainsLogo from '../../assets/homePageAssets/captainslogo.png';

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/events') {
            setTimeout(() => {
                const eventsSection = document.getElementById('events');
                if (eventsSection) {
                    eventsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.pathname]);
    
    return (
        <>
            <div className="mainSection">
                <div className="slideshow"></div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="mainTitle"
                >
                    <h1>Vitality<br/>Church</h1>
                </motion.div>
                
                <div className="mainButton">
                    <a onClick="scrollMainButton()">
                    <Link to="/Connect">
                        <motion.button
                            initial={{ y: '200px' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="mainButton-Button"
                        >
                            New Here?
                        </motion.button>
                        </Link>
                    </a>
                </div>
            </div>
            <div className="newInfoSection">
                <div className="newInfoSectionInfo">
                    <motion.h2>Love God - Love People</motion.h2>
                    <br />
                    <p>Vitality Church is more than just a place of worship; it is a welcoming, vibrant community. Whether you are a 
                        long-time believer or just beginning your spiritual journey, you will find a supportive and encouraging 
                        environment at Vitality Church. The sermons delivered at Vitality Church are thought-provoking and relevant,
                         addressing real-life issues and providing practical guidance for daily living. The pastors share biblical truths with clarity 
                         and compassion. Each message is crafted to inspire and challenge you to grow in your faith and apply the teachings of the Bible in meaningful ways.
                    </p>
                    <Link to ="/AboutUs">
                    <button className="newInfoSectionButton">About Us</button>
                    </Link>
                </div>
                <div className="newInfoSectionImg">
                    <img src={mainImage} alt="" loading="lazy" decoding="async" />
                </div>
            </div>
            <div className="newSundaySectionWrap">
                <div className="newSundaySection">
                    <div className="newSundaySectionInfo">
                        <h2>Sunday Service 10:00am</h2>
                        <br />
                        <p className="newSundaySectionRegular">Join us every Sunday at 10:00am for our worship service.
                            Once everything gets started, worship! Remember you'll never
                            be singled out or called on during the service. We will never
                            embarrass you. This is Jesus' Church, just make yourself at
                            home and learn from Him.
                        </p>
                        <br />
                        <p className="newSundaySectionAddress">
                            5783 Heisley Road, Mentor, OH 44060
                        </p>
                        <Link to ="/SundayMornings">
                        <button className="newSundaySectionButton">Learn More</button>
                        </Link>
                    </div>
                    <div className="newSundaySectionImg">
                        <img src={sundayService} alt="" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
            <div className="newCardsSection">
                <Link to="/youth" className="newCardsLeft">
                    <div className="newCardsLeftMiddle">
                        <h2>Youth</h2>
                    </div>
                </Link>
                <div className="newCardsRight">
                    <Link to="/connect" className="newCardsRightTop">
                        <h2>Connect</h2>
                    </Link>
                    <Link to="/give" className="newCardsRightBottom">
                        <h2>Give</h2>
                    </Link>
                </div>
            </div>
            <div className="newSermonSection">
                <div className="newSermonLeft">
                    <h2 className="newSermonLeftText">
                        Vitality Church <br /> Sermons on YouTube
                    </h2>
                    <p className="newSermonSubtext">
                        Every Sunday morning our services go <strong>live on YouTube</strong>. Whether you missed a week, want to revisit a message, or are just starting your journey, every sermon will always be available to watch whenever needed.
                    </p>
                    <a
                        href="https://www.youtube.com/@vitalitychurch5132"
                        target="_blank"
                        rel="noreferrer"
                        className="sermonSubscribeBtn"
                    >
                        Subscribe
                    </a>
                </div>
                <div className="newSermonRight">
                    <div className="sermonYoutubeImgWrap">
                        <img
                            src={sermonYoutube}
                            alt="Vitality Church Sermons on YouTube"
                            className="sermonYoutubeImg"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
            <div className="missionsTripContainer">
                    <div className="missionsTripLeft">
                        <ImageSlider />
                    </div>
                    <div className="missionsTripRight">
                        <h2>Missions Trip 2025</h2>
                        <p>A group of believers from Ohio have been ministering in Siguatepeque, Honduras, for over 30 years. 
                            Their ministry has two primary components: men working with a local team to pour concrete floors, 
                            and women conducting Vacation Bible School for children and moms. The purpose of their mission is 
                            to demonstrate the love of Christ and soften hearts for the Gospel message. Each visit culminates 
                            in a presentation of the Gospel, as the team's goal is to spread Jesus' message and show love through 
                            their actions.
                        </p>
                        <img src={hFlag} alt="" loading="lazy" decoding="async" />
                    </div>
            </div>
            <div className="newSectionAfterMissionTrips" id="events">
                <div className="newSectionAfterMissionTripsContent">
                    <h2>Events With Vitality</h2>
                    <div className="newSectionSubtext">
                        <p>Join Vitality Church for Faith Night with the Lake County Captains on Faith Friday, July 17th!</p>
                        <p><span className="blueUnderline">Arrival Time:</span> 6:30 PM</p>
                        <p><span className="blueUnderline">Food will be available:</span> 6:30 PM – 8:00 PM</p>
                        <p><span className="blueUnderline">Tickets:</span></p>
                        <ul>
                            <li>$15.00 for Vitality Church members</li>
                            <li>$25.00 for non-members</li>
                        </ul>

                        <p>Includes game ticket and meal. Please make payments payable to Vitality Church with "Faith Night" in the memo line. Dottie will collect payment.</p>

                        <p>Please respond by <span className="blueUnderline">June 28th</span>. If cost is an issue, please don't let that hold you back — your cost will be covered. We would love for everyone to join us!</p>

                        <p>For more information, please see <span className="blueUnderline">David Poole</span>.</p>
                            </div>
                </div>

                <div className="eventsForm">
                    {/* BEGIN CLEARSTREAM FORM */}
                    <link media="all" type="text/css" rel="stylesheet" href="https://app.clearstream.io/css/external/form.html.css" />
                    <div className="cs_html_form_container">
                        <h3>Lake County Captains Game</h3>
                        <p className="cs_html_form_subtitle">Fill out the form to sign up for this event!</p>
                        <form className="cs_html_form" action="https://opturl.com/h/qwKj2P40" method="post" id="cs_html_form_qwKj2P40" target="_blank">
                            <div className="cs_html_form_result"></div>
                            <div className="cs_html_form_error"></div>
                            <div className="cs_html_form_row"><input type="text" name="mobile_number" placeholder="Mobile Number *" data-country="US"/></div>
                            <div className="cs_html_form_row"><input type="text" name="first" placeholder="First Name"/></div>
                            <div className="cs_html_form_row"><input type="text" name="last" placeholder="Last Name"/></div>
                            <div className="cs_html_form_row"><input type="text" name="email" placeholder="Email Address *"/></div>
                            <div className="cs_html_form_row">
                                <button type="submit">Subscribe</button>
                            </div>
                            <p className="cs_html_form_terms">Message &amp; data rates may apply. Message frequency varies. <a href="https://clst.io/terms" target="_blank" rel="noreferrer">Terms of Service</a> and <a href="https://clst.io/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. To opt-out, text STOP at any time. <a href="https://clearstream.io" target="_blank" rel="noreferrer">Software by Clearstream.</a></p>
                        </form>
                            </div>
                    <script src="https://app.clearstream.io/js/external/form.html.js"></script>
                    <script type="text/javascript">var $csj = jQuery.noConflict(true);</script>
                    <div className="eventsLogos">
                        <img src={vitalityLogoWhite} alt="Vitality Church Logo" />
                        <img src={captainsLogo} alt="Lake County Captains Logo" />
                    </div>
                    {/* END CLEARSTREAM FORM */}
                </div>
            </div>
        </>
    );
}

function VideoComponent(props) {
    return (
        <>
            <iframe className={props.className} src={props.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
        </>
    )
}


function ImageSlider(){
    const images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev < images.length-1 ? prev + 1 : 0));
    }   

    const prevSlide = () =>{
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : images.length - 1));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => clearInterval(interval);
    }, [currentSlide]); 

    return(
        <>
        <div className="sliderContainer">
            <span className="prevButton" onClick={prevSlide}>&#10094;</span>
            <img src={images[currentSlide]} alt="" decoding="async" />
            <span className="nextButton" onClick={nextSlide}>&#10095;</span>
        </div>
        </>
    );

}

