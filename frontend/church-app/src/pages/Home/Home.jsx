import './Home.css';

import churchImage from '../../assets/vitalityChurchImage.jpg';
import YoutubeImage from '../../assets/homePageAssets/YTlogo.png';
import jesusSign from '../../assets/homePageAssets/jesusSign.jpg';

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
            <h2>About Vitality</h2>
            <div className="aboutSection-info">
                <p>Not all of us have grown up with a true understanding of God. At a certain point in our lives,
                questions about God start to surface. Each day, the question about God gets louder within us, and we 
                want to discover the truth about why we are here. It is this truth that will set us free (John 8:32).
                Vitality Church is a community of people coming together to know and serve God. We are dedicated to sharing 
                the vital truth of God's love, as it is expressed in John 3:16. God loves you so deeply that He gave you 
                Jesus Christ, not to condemn you, but to give you eternal life!
                </p>
            </div>
            <div className="imageHolder">
                <img src={jesusSign} alt="" />
                <img src={jesusSign} alt="" />
                <img src={jesusSign} alt="" />
            </div>
        </div>
    </>
    );
}