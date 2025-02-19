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
                    <p>Join us every Sunday at 10:00am for our worship service.
                        Once everything gets started, worship! Remember you'll never 
                        be singled out or called on during the service.  We will never 
                        embarrass you. This is Jesus' Church, just make yourself at 
                        home and learn from Him.
                    </p>
                    <br />
                    <p>
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
        <div className="infoSection">
            <motion.div 
            initial={{ x: '-500px'}}
            whileInView={{ x: 0}}
            transition={{duration: 1.5}}
            className="meetingTime">
                <h3>Sunday Worhship</h3>
                <h5>10:00 AM</h5>
                <div className="meetingTime-quote">
                    <h6>2 Corinthians 5:17</h6>
                    <p>Therefore, if anyone is in Christ, the New creation has come:<br />The old has gone, the new is here!</p>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 1.5}}
                    className="meetingTime-button">What to Expect?</motion.button>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5}}
            className="meetingPlace">
                <img src={churchImage2} alt="" />
                <h5>5783 Heisley Road, Mentor, OH 44060</h5>  
            </motion.div>
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
        <div className="aboutSection">
            <motion.h2
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5}}
            >About Vitality</motion.h2>
            <motion.div className="aboutSection-info"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5}}>
                <p>Vitality Church is a Bible teaching church. We are people coming together in community (church)
                    to know and serve God. We are focused to care and to speak the Truth of God’s love as His love is 
                    professed in John 3:16. That, God so loves you so deeply that He gave you Jesus Christ, not to condemn you but to 
                    give you eternal life! Love God - Love People
                </p>
                <div className="imageHolder">
                <img src={cross} alt="" />
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 1.5}}>Learn More</motion.button>
                <img src={cross} alt="" />
            </div>
            </motion.div>
         </div>
         
        <div className="trailSection">
            <div className="trailInfo">
            <motion.div 
            initial={{ x: '-500px'}}
            whileInView={{ x: 0}}
            transition={{duration: 1.5}}>
            <h2>Trail Life</h2>
            <p>Trail Life USA is a Christian Outdoor Adventure, Character, and Leadership Program for boys and young men. Operating from Troops that are chartered through churches in 48 states, the K-12 program centers on outdoor 
                experiences that build a young man’s skills and allow him to grow on a personal level and as a role model and leader for his peers.  Living the Trail Life is a journey established on timeless values derived from the Bible.
            </p>
            <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 1.5}}>Learn More
            </motion.button> 
            </motion.div>
            </div>
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5}}>
            <img src={tL1} alt="" />
             </motion.div>
        </div>
    </>
    );
}