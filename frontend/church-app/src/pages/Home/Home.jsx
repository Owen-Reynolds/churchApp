import './Home.css';
import './HomeMobile.css';

import mainImage from '../../assets/homePageAssets/thumbnail_IMG_6616.webp';

import sliderImage1 from '../../assets/homePageAssets/sliderImages/sliderImage1.jpg';
import sliderImage2 from '../../assets/homePageAssets/sliderImages/sliderImage2.jpg';
import sliderImage3 from '../../assets/homePageAssets/sliderImages/slideImage3.jpg';
import sliderImage4 from '../../assets/homePageAssets/sliderImages/slideImage4.jpg';
import sliderImage5 from '../../assets/homePageAssets/sliderImages/slideImage5.jpg';
import sliderImage6 from '../../assets/homePageAssets/sliderImages/slideImage6.jpg';
import sliderImage7 from '../../assets/homePageAssets/sliderImages/slideImage7.jpg'
import hFlag from '../../assets/homePageAssets/hFlag.webp';
import sundayService from '../../assets/homePageAssets/sundayService.webp';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Home() {
    useEffect(() => {
    // Load the gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17675757170";
    document.head.appendChild(script);

    // Initialize Google Tag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17675757170');
  }, []);
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
                    <img src={mainImage} alt="" />
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
                        <img src={sundayService} alt="" />
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
                        View Past Vitality Church <br /> Sermons on Youtube
                    </h2>
                </div>
                <div className="newSermonRight">
                    <div className="mainVideo">
                        <VideoComponent className="mainSermonVideo" link="https://www.youtube.com/embed/Pe6i35pNnqo?si=rKeT5_yrPhBN7J3k" />    
                    </div>   
                    <div className="videoContainer">
                        <div className="rightRow1">
                            <VideoComponent className="sermonVideo" link="https://www.youtube.com/embed/HMhlr_Jq4fY?si=cY-lSMk04KsRaDSx" />
                        </div>
                        <div className="rightRow2">
                            <VideoComponent className="sermonVideo" link="https://www.youtube.com/embed/PA2aAwDO2Ds?si=JD3jsgpLWxgggp61" />
                        </div>
                        <div className="rightRow3">
                            <VideoComponent className="sermonVideo" link="https://www.youtube.com/embed/2kOmhOcr64I?si=ZLpLnEZnd3blSD44" />
                        </div>
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
                        <img src={hFlag} alt="" />
                    </div>
            </div>
        </>
    );
}

function VideoComponent(props) {
    return (
        <>
            <iframe className={props.className} src={props.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
            <img src={images[currentSlide]} alt="" />
            <span className="nextButton" onClick={nextSlide}>&#10095;</span>
        </div>
        </>
    );

}

