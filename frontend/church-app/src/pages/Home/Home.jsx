import './Home.css';

import churchImage from '../../assets/vitalityChurchImage.jpg';

import {motion} from 'framer-motion';

export default function Home() {
    return(
    <>
        <div className="mainSection">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{duration: 2}}
             className="mainTitle">
                <h1>Vitality<br />Church</h1>
            </motion.div>
            <div className="mainButton">
                <a href="/AboutUs">
                    <motion.button 
                    initial={{y: '200px'}}
                    animate={{y: 0}}
                    transition={{duration: 1.5}}
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                    className="mainButton-Button">Learn More
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
    </>
    );
}