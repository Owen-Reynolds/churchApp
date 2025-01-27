import './Home.css';

import churchImage from '../../assets/vitalityChurchImage.jpg';
import YoutubeImage from '../../assets/homePageAssets/YTlogo.png';
import cross from '../../assets/homePageAssets/cross.png';
import heartrate from '../../assets/homePageAssets/heartrate.png';

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
                <img src={churchImage} alt="" />
                <h5>8751 Mentor Ave, Mentor, OH 44060</h5>  
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
            <h2>About Vitality</h2>
            <div className="aboutSection-info">
                <p>Vitality Church is a Bible teaching church. We are people coming together in community (church)
                    to know and serve God. We are focused to care and to speak the Truth of God’s love as His love is 
                    professed in John 3:16. That, God so loves you so deeply that He gave you Jesus Christ, not to condemn you but to 
                    give you eternal life! Love God - Love People
                </p>
            </motion.div>
            <div className="imageHolder">
                <img src={jesusSign} alt="" />
                <img src={jesusSign} alt="" />
                <img src={jesusSign} alt="" />
            </div>
         </div>
         

        <div className="trailSection">
            <h2>Trail Life and AHG</h2>
            <div className="trailInfo">
                
            </div>
            <div className="pictureStack">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div className>

        </div>
    </>
    );
}