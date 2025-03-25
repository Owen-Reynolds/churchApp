import './Home.css';
import './HomeMobile.css';

import mainImage from '../../assets/homePageAssets/thumbnail_IMG_6616.jpg';
import sundayImage from '../../assets/homePageAssets/thumbnail_IMG_6494.jpg';
import sliderImage1 from '../../assets/homePageAssets/sliderImages/sliderImage1.jpg';
import sliderImage2 from '../../assets/homePageAssets/sliderImages/sliderImage2.jpg';
import sliderImage3 from '../../assets/homePageAssets/sliderImages/slideImage3.jpg';
import sliderImage4 from '../../assets/homePageAssets/sliderImages/slideImage4.jpg';
import sliderImage5 from '../../assets/homePageAssets/sliderImages/slideImage5.jpg';
import sliderImage6 from '../../assets/homePageAssets/sliderImages/slideImage6.jpg';
import sliderImage7 from '../../assets/homePageAssets/sliderImages/slideImage7.jpg'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Home() {
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
                    <Link to="/connect">
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
                    <h2>Love God - Love People</h2>
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
                        <img src={sundayImage} alt="" />
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
                        
                    </div>
                    <div className="missionsTripRight">
                        <h2>Missions Trip <br /> 2025</h2>
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


function imageSlider(props){
    images = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7];

    currentSlide = 0;

    nextSlide = () => {
        if(currentSlide <= images.length()){
            currentSlide ++;
        } else {
            currentSlide == 0;
        }
    }   

    prevSlide = () =>{
        if(currentSlide != 0){
            currentSlide --;
        } else {
            currentSlide = 9;
        }
    }

}

