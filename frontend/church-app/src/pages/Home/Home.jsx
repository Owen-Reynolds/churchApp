import './Home.css';

import mainImage from '../../assets/homePageAssets/thumbnail_IMG_6616.jpg';
import sundayImage from '../../assets/homePageAssets/thumbnail_IMG_6494.jpg';
import churchImage from '../../assets/vitalityChurchImage.jpg';
import YoutubeImage from '../../assets/homePageAssets/YTlogo.png';
import cross from '../../assets/homePageAssets/cross.png';
import woods from '../../assets/homePageAssets/woods.jpg';
import trailLife from '../../assets/homePageAssets/trailLife.png';
import vitalityLogo from '../../assets/homePageAssets/vitalitylogowhite.png';
import tL1 from '../../assets/homePageAssets/trailLife1.jpg';
import churchImage2 from '../../assets/homePageAssets/outside2.jpg';
import AHG from '../../assets/homePageAssets/AHG.jpg';
import giveImg from '../../assets/homePageAssets/Give.jpg';
import youthImg from '../../assets/homePageAssets/Youth.jpg';



import {motion} from 'framer-motion';

export default function Home() {
    return(
    <>
    
        <div className="mainSection">
            <div className="slideshow"></div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{duration: 2}}
            className="mainTitle">
                <h1>Vitality<br />Church</h1>
            </motion.div>
            <div className="mainButton">
                <a onClick="scrollMainButton()">
                    <motion.button 
                    initial={{y: '200px'}}
                    animate={{y: 0}}
                    transition={{duration: 1.5}}
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                    className="mainButton-Button">New Here?
                    </motion.button>
                </a>
            </div>
        </div>
        <div className="newInfoSection">
            <div className="newInfoSectionInfo">
                <h2>Love God - Love People</h2>
                <br />
                <p>Vitality Church is a Bible teaching church. We are people coming together in community (church)
                    to know and serve God. We are focused to care and to speak the Truth of God’s love as His love is 
                    professed in John 3:16. That, God so loves you so deeply that He gave you Jesus Christ, not to condemn you but to 
                    give you eternal life!
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error 
                    delectus nulla aperiam maxime ipsa, sunt possimus iste. Nihil voluptate 
                    reprehenderit laudantium quia deserunt, assumenda ipsum praesentium ut 
                    obcaecati repudiandae.
                </p>
                <button className="newInfoSectionButton">About Us</button>
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
                        be singled out or called on during the service.  We will never 
                        embarrass you. This is Jesus' Church, just make yourself at 
                        home and learn from Him.
                    </p>
                    <br />
                    <p className="newSundaySectionAddress">
                        5783 Heisley Road, Mentor, OH 44060
                    </p>
                    <button className="newSundaySectionButton">Learn More</button>
                </div>
                <div className="newSundaySectionImg">
                    <img src={sundayImage} alt="" />
                </div>
            </div>
        </div>
        <div className="newCardsSection">
            <div className="newCardsLeft">
                <div className="newCardsLeftMiddle">
                    <h2>Youth</h2>
                </div>
            </div>
            <div className="newCardsRight">
                <div className="newCardsRightTop">
                    <h2>Connect</h2>
                </div>
                <div className="newCardsRightBottom">
                    <h2>Give</h2>
                </div>
            </div>
        </div>
        <div className="sermonSection">
            <motion.div
            initial={{ x: '500px'}}
            whileInView={{ x: 0}}
            transition={{duration: 1.5}}
            className="sermon">
            <h2>Sunday Sermons</h2>
            <h3>Visit our YouTube channel to watch all of our sermons!</h3>
            <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 1.5}}
                    className="sermonSection-button">Visit Site
            </motion.button>
            </motion.div>
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5}}
            className="sermonVideo">
            <img src={YoutubeImage} alt="" />
            <iframe src="https://www.youtube.com/embed/bYagof6_xOE?si=ISytgpvsEIAYOvTI" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </motion.div>
        </div>
    </>
    );
}